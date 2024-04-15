const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const todosRouter = require('./routes/todos');

app.use(bodyParser.json());
app.use('/todos', todosRouter);

// Define a default route to handle invalid requests
app.use((req, res) => {
    res.status(404).json({ message: 'Not Found' });
});

// Express server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});