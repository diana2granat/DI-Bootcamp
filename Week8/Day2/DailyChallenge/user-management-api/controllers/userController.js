const bcrypt = require('bcrypt');
const knex = require('../config/database');

exports.register = async (req, res) => {
    try {
        const { email, username, password, first_name, last_name } = req.body;
        const existingUser = await knex('users').where('username', username).orWhere('email', email).first();
        if (existingUser) {
            return res.status(400).json({ message: 'Username or email already exists' });
        }
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        // Insert the user into the database
        await knex.transaction(async (trx) => {
            await trx('users').insert({ email, username, first_name, last_name });
            await trx('hashpwd').insert({ username, password: hashedPassword });
        });
        // Respond with success message
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.login = async (req, res) => {
    try {
        // Extract username and password from request body
        const { username, password } = req.body;
        // Query the database to get the hashed password for the provided username
        const user = await knex('hashpwd').where('username', username).first();
        if (!user) {
            // If the user does not exist, return 401 Unauthorized
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        // Compare the provided password with the hashed password from the database
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            // If the passwords do not match, return 401 Unauthorized
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        // If the credentials are valid, respond with a success message
        res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.getAllUsers = async (req, res) => {
    try {
        const users = await knex('users').select('*');
        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await knex('users').where('id', id).first();
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.updateUser = async (req, res) => {
    try {
        // Extract user ID from request parameters
        const { id } = req.params;
        // Extract updated user data from request body
        const { email, username, first_name, last_name } = req.body;
        // Check if the user exists in the database
        const existingUser = await knex('users').where('id', id).first();
        if (!existingUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        // Update user information in the database
        await knex('users').where('id', id).update({ email, username, first_name, last_name });
        // Respond with success message
        res.status(200).json({ message: 'User updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
