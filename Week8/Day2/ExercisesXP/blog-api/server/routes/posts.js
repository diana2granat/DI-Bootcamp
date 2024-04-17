const express = require('express');
const router = express.Router();
const { Pool } = require('pg');

// Create a pool for managing database connections
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'nodejsdb',
  password: 'N3v3r74nd@',
  port: 5432, // Default PostgreSQL port
});

// GET /posts: Return a list of all blog posts
router.get('/', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM posts');
    const posts = result.rows;
    client.release();
    res.json(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /posts/:id: Return a specific blog post based on its id
router.get('/:id', async (req, res) => {
  try {
    const postId = parseInt(req.params.id);
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM posts WHERE id = $1', [postId]);
    const post = result.rows[0];
    client.release();
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.json(post);
  } catch (error) {
    console.error('Error fetching post:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST /posts: Create a new blog post
router.post('/', async (req, res) => {
  try {
    const { title, content } = req.body;
    const client = await pool.connect();
    const result = await client.query('INSERT INTO posts (title, content) VALUES ($1, $2) RETURNING *', [title, content]);
    const newPost = result.rows[0];
    client.release();
    res.status(201).json(newPost);
  } catch (error) {
    console.error('Error creating post:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// PUT /posts/:id: Update an existing blog post
router.put('/:id', async (req, res) => {
  try {
    const postId = parseInt(req.params.id);
    const { title, content } = req.body;
    const client = await pool.connect();
    const result = await client.query('UPDATE posts SET title = $1, content = $2 WHERE id = $3 RETURNING *', [title, content, postId]);
    const updatedPost = result.rows[0];
    client.release();
    if (!updatedPost) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.json(updatedPost);
  } catch (error) {
    console.error('Error updating post:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// DELETE /posts/:id: Delete a blog post
router.delete('/:id', async (req, res) => {
  try {
    const postId = parseInt(req.params.id);
    const client = await pool.connect();
    const result = await client.query('DELETE FROM posts WHERE id = $1 RETURNING *', [postId]);
    const deletedPost = result.rows[0];
    client.release();
    if (!deletedPost) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.sendStatus(204);
  } catch (error) {
    console.error('Error deleting post:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;