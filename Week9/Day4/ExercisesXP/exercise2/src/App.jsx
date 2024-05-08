import './App.css'
import React, { useState, useEffect } from 'react';
import PostList from './PostList';
import data from './data.json'; // Import the data file

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(data);
  }, []);

  return (
    <div>
      <h1>My Posts</h1>
      <PostList posts={posts} />
    </div>
  );
}

export default App;
