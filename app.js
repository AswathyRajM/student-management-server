const express = require('express');
const applyRoutes = require('./routes/index.js');
require('dotenv').config();

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// applyRoutes(app);

process.on('unhandledRejection', (error) => {
  console.log('unhandledRejection', error);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
