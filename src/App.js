import './styles/App.css';
import { useState, useMemo } from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Some awesome', descr: 'This is really shit'},
    {id: 2, title: 'Fake reallity', descr: "Don't trust everything"},
    {id: 3, title: 'Love yourself', descr: "You're individual, not a part of system"}
  ]);

  const [filter, setFilter] = useState({sort: '', query: ''});

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()));
  }, [filter.query, sortedPosts]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  };

  return (
    <div className="app">
      <PostForm create={createPost} />
      <PostFilter 
        filter={filter}
        setFilter={setFilter}
      />
      {
        sortedAndSearchedPosts.length
        ? <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Posts no. 1' />
        : <div style={{textAlign: 'center', fontSize: '20px'}}>Posts not found</div>
      }
    </div>
  );
}

export default App;
