const { Sequelize, DataTypes } = require('sequelize');
const { username, password, database, host, dialect } = require('../config/config');

const sequelize = new Sequelize({
  username,
  password,
  database,
  host,
  dialect,
});
 
const usersModelBuilder = require('./users');

const Users = usersModelBuilder(sequelize, DataTypes);
  
module.exports = { Users };
