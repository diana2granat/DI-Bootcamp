const express = require('express');
const router = express.Router();

// Sample in-memory database for storing books
const books = [];

router.get('/', (req, res) => {
    res.json(books);
});

// Add a new book
router.post('/', (req, res) => {
    const { title, author } = req.body;
    const newBook = { id: books.length + 1, title, author};
    books.push(newBook);
    res.status(201).json(newBook);
});

// Update a book by ID
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { title, author } = req.body;
    const bookIndex = books.findIndex(book => book.id === parseInt(id));
    if (bookIndex === -1) {
        return res.status(404).json({ message: 'Book not found' });
    }
    books[bookIndex].title = title;
    books[bookIndex].author = author;
    res.json(books[bookIndex]);
});

// Delete a book by ID
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const bookIndex = books.findIndex(book => book.id === parseInt(id));
    if (bookIndex === -1) {
        return res.status(404).json({ message: 'Book not found' });
    }
    books.splice(bookIndex, 1);
    res.sendStatus(204);
});


module.exports = router;


