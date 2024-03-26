// database.js
import { Sequelize } from 'sequelize';

const db = new Sequelize('bloomsterly', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

export default db;
