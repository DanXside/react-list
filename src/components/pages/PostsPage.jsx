import { useState, useEffect, useRef } from 'react';
import PostList from '../PostList';
import PostForm from '../PostForm';
import PostFilter from '../PostFilter';
import MyModal from '../UI/modal/MyModal';
import MyButton from '../UI/button/Button';
import { usePosts } from '../hooks/usePosts';
import { useFetching } from '../hooks/useFetching';
import PostService from '../API/PostService';
import { getPageCount, getPagesArr } from '../utils/page';
import { Pagination } from '../UI/pagination/pagination';
import { useObserver } from '../hooks/useObserver';

function PostsPage() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const lastElem = useRef();

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const [fetchPosts, isPostsLoading, postsError] = useFetching( async () => {
    const response = await PostService.getAll(limit, page);
    setPosts([...posts, ...response.data]);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, limit));
  });

  useObserver(lastElem, isPostsLoading, page < totalPages, () => {
    setPage(page + 1);
  });

  useEffect(() => {
    fetchPosts();
  }, [page]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  };

  const changePage = (page) => {
    setPage(page);
  }

  return (
    <div className="app">
      <MyButton  onClick={() => setModal(true)} >Create Post</MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <PostFilter 
        filter={filter}
        setFilter={setFilter}
      />
      {
        postsError && <h1>Finding error: ${postsError}</h1>
      }
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Posts no. 1' />
      <div ref={lastElem} style={{height: '20px', background: 'red'}} />
      {
        isPostsLoading && <h1>Loading...</h1>
      }
      <Pagination totalPages={totalPages} changePage={changePage}/>
    </div>
  );
}

export default PostsPage;