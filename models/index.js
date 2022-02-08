require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  host: process.env.HOSTNAME,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: 'blogs_api',
  dialect: 'mysql'
});


module.exports = sequelize;
