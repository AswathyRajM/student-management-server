import { DataTypes, Model } from 'sequelize';
import sequelize from '../../config/database';
import Sessions from './sessions.model';

class Student extends Model {}

Student.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    token: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: 'student_login',
    freezeTableName: true,
  }
);

Student.hasMany(Sessions, { foreignKey: 'student_id' });
Sessions.belongsTo(Student, { foreignKey: 'student_id' });

export default Student;
