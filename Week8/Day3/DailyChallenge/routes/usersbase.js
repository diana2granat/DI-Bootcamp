const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const { body, validationResult } = require('express-validator');

const bodyParser = require('body-parser');
router.use(bodyParser.json());

const dataFilePath = path.join(__dirname, '../users.json');

// read users from JSON file
function readUsersFromFile() {
    try {
        const data = fs.readFileSync(dataFilePath, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error('Error reading users from file:', err);
        return [];
    }
}

// write users to JSON file
function writeUsersToFile(users) {
    try {
        fs.writeFileSync(dataFilePath, JSON.stringify(users, null, 4), 'utf8');
    } catch (err) {
        console.error('Error writing users to file:', err);
    }
}

// POST /register: Allow users to register by providing a username and password. 
// Hash the password using bcrypt before storing it in the JSON file.
router.post('/register', [
    body('name').notEmpty().withMessage('Name is required'),
    body('lastName').notEmpty().withMessage('Last Name is required'),
    body('email').isEmail().withMessage('Invalid email address'),
    body('username').notEmpty().withMessage('Username is required'),
    body('password').notEmpty().withMessage('Password is required')
    ], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { name, lastName, email, username, password } = req.body;
    const users = readUsersFromFile();

    // Check if username or password already exist
    if (users.some(user => user.username === username || user.password === password)) {
        return res.status(400).json({ message: 'Error1: Username or password already exists' });
    }

    // Hash the password
    bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) {
            console.error('Error hashing password:', err);
            return res.status(500).json({ message: 'Internal Server Error' });
        }

        // Add the new user to the user data
        const newUser = {
            name,
            lastName,
            email,
            username,
            password: hashedPassword
        };
        users.push(newUser);
        writeUsersToFile(users);

        res.status(201).json({ message: 'User registered successfully', user: newUser });
    });
});

// POST /login: Allow users to login by providing their username and password.
router.post('/login', [
    body('username').notEmpty().withMessage('Username is required'),
    body('password').notEmpty().withMessage('Password is required')
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { username, password } = req.body;
    const users = readUsersFromFile();

    // Find user by username
    const user = users.find(user => user.username === username);
    if (!user) {
        return res.status(401).json({ message: 'Error2: User not found' });
    }

    // Compare the password
    bcrypt.compare(password, user.password, (err, result) => {
        if (err) {
            console.error('Error comparing passwords:', err);
            return res.status(500).json({ message: 'Internal Server Error' });
        }
        if (!result) {
            return res.status(401).json({ message: 'Error2: Invalid username or password' });
        }

        // If passwords match, login successful
        res.json({ message: 'Login successful', user: { username: user.username } });
    });
});

// GET /users: Retrieve a list of all registered users from a JSON file.
router.get('/users', (req, res) => {
    const users = readUsersFromFile();
    res.json(users);
});

// GET /users/:id: Retrieve a specific user by ID from the JSON file.
router.get('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const users = readUsersFromFile();
    const user = users.find(user => user.id === userId);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

// PUT /users/:id: Update a user’s information by ID in the JSON file.
router.put('/users/:id', [
    body('username').notEmpty().withMessage('Username is required'),
    body('password').notEmpty().withMessage('Password is required')
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const userId = parseInt(req.params.id);
    const { username, password } = req.body;
    const users = readUsersFromFile();

    // Find the user by ID
    const user = users.find(user => user.id === userId);
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    // Hash the new password
    bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) {
            console.error('Error hashing password:', err);
            return res.status(500).json({ message: 'Internal Server Error' });
        }

        // Update the user's information
        user.username = username;
        user.password = hashedPassword;

        // Write the updated users array to the JSON file
        writeUsersToFile(users);

        res.json({ message: 'User updated successfully', user: user });
    });
});



module.exports = router;
