import sequelize from '../../config/database';
import { Model, DataTypes } from 'sequelize';

class Dean extends Model {
  // static async
}

Dean.init(
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
    modelName: 'dean_login',
    freezeTableName: true,
  }
);
export default Dean;
// class BikeType extends Model {
//   static async addNewBikeType(bikeType) {
//     return BikeType.create(bikeType);
//   }
// }
