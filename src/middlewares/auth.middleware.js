import Student from '../models/student.model';
import Dean from '../models/dean.model';

export const studentAuthentication = async function (req, res, next) {
  const token = req.headers.authorization.replace('Bearer ', '');
  if (!token) {
    res.status(401).send({
      message: 'Access denied',
      success: false,
    });
  } else {
    try {
      const user = await Student.findOne({ where: { token } });
      if (user) {
        req.user = user;
        next();
      } else throw new Error('Student not found');
    } catch (e) {
      res.status(401).send({
        message: e.message,
        success: false,
      });
    }
  }
};

export const deanAuthentication = async function (req, res, next) {
  const token = req.headers.authorization.replace('Bearer ', '');
  if (!token) {
    res.status(401).send({
      message: 'Access denied',
      success: false,
    });
  } else {
    try {
      const user = await Dean.findOne({ where: { token } });
      if (user) {
        req.user = user;
        next();
      } else throw new Error('Dean not found');
    } catch (e) {
      res.status(401).send({
        message: e.message,
        success: false,
      });
    }
  }
};
