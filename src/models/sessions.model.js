import { DataTypes, Model } from 'sequelize';
import sequelize from '../../config/database';

class Sessions extends Model {}

Sessions.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    dean_id: {
      type: DataTypes.STRING(30),
    },
    student_id: {
      type: DataTypes.STRING(40),
    },
    availableDateTime: {
      type: DataTypes.DATE,
    },
  },
  {
    sequelize,
    modelName: 'sessions',
    freezeTableName: true,
  }
);

export default Sessions;
