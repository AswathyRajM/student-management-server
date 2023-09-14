import express from 'express';
import StudentController from '../controllers/student.controller';
import { studentAuthentication } from '../middlewares/auth.middleware';

const router = express.Router();

router.post('/login', StudentController.login);
router.get(
  '/sessions/free',
  studentAuthentication,
  StudentController.freeSessions
);
router.post(
  '/sessions/book',
  studentAuthentication,
  StudentController.bookSessions
);

export { router };
