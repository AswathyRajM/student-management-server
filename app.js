import express, { json } from 'express';
import { applyRoutes } from './src/routes';
require('dotenv').config();

const app = express();
const port = 8080;

app.use(json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

applyRoutes(app);

process.on('unhandledRejection', (error) => {
  console.log('unhandledRejection', error);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
