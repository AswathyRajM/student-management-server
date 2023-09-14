import express from 'express';
import DeanController from '../controllers/dean.controller';

const router = express.Router();

router.post('/login', DeanController.login);
router.get('/sessions/upcoming', DeanController.upcomingSessions);

export { router };
