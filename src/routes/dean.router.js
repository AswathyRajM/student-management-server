import express from 'express';
import DeanController from '../controllers/dean.controller';
import { deanAuthentication } from '../middlewares/auth.middleware';

const router = express.Router();

router.post('/login', DeanController.login);
router.get(
  '/sessions/upcoming',
  deanAuthentication,
  DeanController.upcomingSessions
);

export { router };
