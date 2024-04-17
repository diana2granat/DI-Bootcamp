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

// Read all books route
router.get('/', async (req, res) => {
  try {
    const query = 'SELECT * FROM books';
    const { rows } = await pool.query(query);
    res.json(rows);
  } catch (error) {
    console.error('Error fetching books:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Read a specific book route
router.get('/:bookId', async (req, res) => {
  try {
    const bookId = parseInt(req.params.bookId);
    const query = 'SELECT * FROM books WHERE id = $1';
    const { rows } = await pool.query(query, [bookId]);
    if (rows.length === 0) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.json(rows[0]);
  } catch (error) {
    console.error('Error fetching book:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Create a new book route
router.post('/', async (req, res) => {
  try {
    const { title, author, publishedYear } = req.body;
    const query = 'INSERT INTO books (title, author, publishedYear) VALUES ($1, $2, $3) RETURNING *';
    const { rows } = await pool.query(query, [title, author, publishedYear]);
    res.status(201).json(rows[0]);
  } catch (error) {
    console.error('Error creating book:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
