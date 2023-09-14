import express from 'express';
import StudentController from '../controllers/student.controller';

const router = express.Router();

router.post('/login', StudentController.login);
router.get('/sessions/free', StudentController.freeSessions);
router.post('/sessions/book', StudentController.bookSessions);

export { router };
