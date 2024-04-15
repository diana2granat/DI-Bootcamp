const express = require('express');
const app = express();
const router = require('./routes/index'); // Import the router module

// the router module
app.use('/', router);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});