import Student from '../models/student.model';
import Sessions from '../models/sessions.model';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import Dean from '../models/dean.model';

class StudentContoller {
  static login = async (req, res) => {
    try {
      const foundStudent = await Student.findOne({
        where: {
          id: req.body.userId,
        },
      });

      if (foundStudent) {
        const token = uuidv4();
        await Student.update(
          {
            token,
          },
          {
            where: { id: req.body.userId },
          }
        );
        res.status(200).json({ token, success: true });
      } else throw new Error('Student not found');
    } catch (e) {
      res.status(401).send({ message: e.message, success: false });
    }
  };
  static freeSessions = async (req, res) => {
    try {
      const freeSessions = await Sessions.findAll({
        where: {
          student_id: null,
        },
      });
      if (freeSessions.length) {
        res.status(200).send({ data: freeSessions, success: true });
      } else
        res
          .status(200)
          .send({ message: 'No free sessions available', success: true });
    } catch (e) {
      res.status(401).send({ message: e.message, success: false });
    }
  };
  static bookSessions = async (req, res) => {
    try {
      await Sessions.update(
        {
          student_id: req.user.id,
        },
        {
          where: {
            id: req.body.id,
          },
        }
      );
      res
        .status(200)
        .send({ data: 'Session booked succesfully', success: true });
    } catch (e) {
      res.status(401).send({ message: e.message, success: false });
    }
  };
}

export default StudentContoller;
