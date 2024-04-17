const express = require('express');
// const bodyParser = require('body-parser');
// const postsRouter = require('./server/routes/posts');

const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });