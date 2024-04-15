const express = require('express');
const router = express.Router();

// the route for the About page
router.get('/about', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>About Us</title>
        </head>
        <body>
            <h1>About Us</h1>
            <p>Welcome to our website!</p>
        </body>
        </html>
    `);
});

module.exports = router;
