const { Sequelize, DataTypes } = require('sequelize');
const { username, password, database, host, dialect } = require('../config/config');

const sequelize = new Sequelize({
  username,
  password,
  database,
  host,
  dialect,
});
 
const usersModelBuilder = require('./Users');
const categoriesModelBuilder = require('./Categories');

const Users = usersModelBuilder(sequelize, DataTypes);
const Categories = categoriesModelBuilder(sequelize, DataTypes);
  
module.exports = { Users, Categories };
