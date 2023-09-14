import sequelize from '../../config/database';
import { Model, DataTypes } from 'sequelize';
import Sessions from './sessions.model';

class Dean extends Model {}

Dean.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
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
    modelName: 'dean_login',
    freezeTableName: true,
  }
);

export default Dean;
