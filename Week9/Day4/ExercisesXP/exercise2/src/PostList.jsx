import React from 'react';

function PostList({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.text}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <h2>{post.title2}</h2>
          <p>{post.content2}</p>
        </li>
      ))}
    </ul>
  );
}

export default PostList;
