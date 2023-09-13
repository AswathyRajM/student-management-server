import { Dialect, Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();
const name = process.env.DB_NAME;
const user = process.env.DB_USER;
const host = process.env.DB_HOST;
const dialect = process.env.DB_DRIVER;
const password = process.env.DB_PASS;

const sequelize = new Sequelize(name, user, password, {
  host,
  dialect,
  logging: true,
});

async function TestConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

TestConnection();

export default sequelize;
