const express = require('express');
const bodyParser = require('body-parser');
const quizRouter = require('./routes/quiz');

const app = express();
app.use(bodyParser.json());
app.use('/quiz', quizRouter);

// Define a default route to handle invalid requests
app.use((req, res) => {
    res.status(404).json({ message: 'Not Found' });
});

// Express server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});