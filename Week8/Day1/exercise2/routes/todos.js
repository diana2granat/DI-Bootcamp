const express = require('express');
const router = express.Router();

const todos = [];

// Get all to-do items
router.get('/', (req, res) => {
    res.json(todos);
});

// Add a new to-do item
router.post('/', (req, res) => {
    const { title } = req.body;
    const newTodo = { id: todos.length + 1, title };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

// Update a to-do item by ID
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    const todoIndex = todos.findIndex(todo => todo.id === parseInt(id));
    if (todoIndex === -1) {
        return res.status(404).json({ message: 'Todo not found' });
    }
    todos[todoIndex].title = title;
    res.json(todos[todoIndex]);
});

// Delete a to-do item by ID
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const todoIndex = todos.findIndex(todo => todo.id === parseInt(id));
    if (todoIndex === -1) {
        return res.status(404).json({ message: 'Todo not found' });
    }
    todos.splice(todoIndex, 1);
    res.sendStatus(204);
});


module.exports = router;
