import { DataTypes, Model } from 'sequelize';
import sequelize from '../../config/database';

class Student extends Model {}

Student.init(
  {
    id: {
      type: DataTypes.STRING(10),
      primaryKey: true,
    },
    password: {
      type: DataTypes.STRING(30),
    },
    token: {
      type: DataTypes.STRING(40),
    },
  },
  {
    sequelize,
    modelName: 'student_login',
    freezeTableName: true,
  }
);

export default Student;
