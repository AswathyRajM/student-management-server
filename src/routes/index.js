import express from 'express';
import { router as student } from './student.router';
import { router as dean } from './dean.router';

const rootRouter = express.Router();
rootRouter.use('/student', student);
rootRouter.use('/dean', dean);

export const applyRoutes = (app) => {
  app.use('/api', rootRouter);
};
