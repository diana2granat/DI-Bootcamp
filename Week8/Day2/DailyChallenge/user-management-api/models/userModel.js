const knex = require('../config/database');

// Create users table
knex.schema.createTable('users', table => {
    table.increments('id').primary();
    table.string('email').unique();
    table.string('username').unique();
    table.string('first_name');
    table.string('last_name');
}).then(() => console.log('Users table created'));

// Create hashpwd table
knex.schema.createTable('hashpwd', table => {
    table.increments('id').primary();
    table.string('username').unique();
    table.string('password');
}).then(() => console.log('Hashpwd table created'));

module.exports = knex;