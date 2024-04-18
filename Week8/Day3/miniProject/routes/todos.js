const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const { body, validationResult } = require('express-validator');


const dataFilePath = path.join(__dirname, '../tasks.json');

// read tasks from JSON file
function readTasksFromFile() {
    try {
        const data = fs.readFileSync(dataFilePath, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error('Error reading tasks from file:', err);
        return [];
    }
}

// write tasks to JSON file
function writeTasksToFile(tasks) {
    try {
        fs.writeFileSync(dataFilePath, JSON.stringify(tasks, null, 4), 'utf8');
    } catch (err) {
        console.error('Error writing tasks to file:', err);
    }
}

// GET /tasks: Retrieve a list of all tasks from a JSON file.
router.get('/', (req, res) => {
    const tasks = readTasksFromFile();
    res.json(tasks);
});

// GET /tasks/:id: Retrieve a specific task by ID from the JSON file.
router.get('/:id', (req, res) => {
    const tasks = readTasksFromFile();
    const { id } = req.params;
    const todo = tasks.find(todo => todo.id === id);
    if (todo) {
        res.json(todo);
    } else {
        res.status(404).json({ message: "Task not found" });
    }
});

// POST /tasks: Create a new task and store it in the JSON file.
router.post('/', [body('title').notEmpty().withMessage('Title is required'),], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const tasks = readTasksFromFile();
    const { title } = req.body;
    const newTask = { id: tasks.length + 1, title };
    tasks.push(newTask);
    writeTasksToFile(tasks);
    res.status(201).json(newTask);
});


// PUT /tasks/:id: Update a task by ID in the JSON file.
router.put('/:id', [body('title').notEmpty().withMessage('Title is required'),], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const tasks = readTasksFromFile();
    const { id } = req.params;
    const { title } = req.body;
    const taskIndex = tasks.findIndex(task => task.id === id);
    if (taskIndex !== -1) {
        tasks[taskIndex].title = title;
        writeTasksToFile(tasks);
        res.json(tasks[taskIndex]);
    } else {
        res.status(404).json({ message: 'Task not found' });
    }
});


// DELETE /tasks/:id: Delete a task by ID from the JSON file.
router.delete('/:id', (req, res) => {
    const tasks = readTasksFromFile();
    const { id } = req.params;
    const taskIndex = tasks.findIndex(task => task.id === id);
    if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1);
        writeTasksToFile(tasks);
        res.sendStatus(204);
    } else {
        res.status(404).json({ message: 'Task not found' });
    }
});


module.exports = router;
