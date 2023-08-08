import './styles/App.css';
import { useState, useEffect } from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/modal/MyModal';
import MyButton from './components/UI/button/Button';
import { usePosts } from './components/hooks/usePosts';
import { useFetching } from './components/hooks/useFetching';
import PostService from './components/API/PostService';
import { getPageCount, getPagesArr } from './components/utils/page';
import { Pagination } from './components/UI/pagination/pagination';

function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const [fetchPosts, isPostsLoading, postsError] = useFetching( async () => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, limit));
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
      {
        isPostsLoading 
        ? <h1>Loading...</h1>
        : <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Posts no. 1' />
      }
      <Pagination totalPages={totalPages} changePage={changePage}/>
    </div>
  );
}

export default App;
