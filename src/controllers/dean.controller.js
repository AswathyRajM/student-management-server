import Dean from '../models/dean.model';
import { v4 as uuidv4 } from 'uuid';
import Sessions from '../models/sessions.model';
import { Op } from 'sequelize';
import Student from '../models/student.model';

class DeanController {
  static login = async (req, res) => {
    try {
      // await Dean.create({
      //   id: req.body.userId,
      //   password: req.body.password,
      // });
      const foundDean = await Dean.findOne({
        where: {
          id: req.body.userId,
        },
      });
      if (foundDean) {
        const token = uuidv4();
        await Dean.update(
          {
            token,
          },
          {
            where: { id: req.body.userId },
          }
        );
        res.status(200).json({ token, success: true });
      } else throw new Error('Dean not found');
    } catch (e) {
      res.status(401).send({ message: e.message, success: false });
    }
  };
  static upcomingSessions = async (req, res) => {
    try {
      const freeSessions = await Sessions.findAll({
        where: {
          availableDateTime: {
            [Op.gte]: Date(),
          },
          dean_id: req.user.id,
          student_id: {
            [Op.ne]: null,
          },
        },
        include: [
          {
            model: Student,
            attributes: ['name', 'id'],
          },
        ],
      });
      if (freeSessions.length)
        res.status(200).json({ data: freeSessions, success: true });
      else
        res
          .status(200)
          .json({ message: 'No upcoming sessions', success: true });
    } catch (e) {
      res.status(401).send({ message: e.message, success: false });
    }
  };
}

export default DeanController;
