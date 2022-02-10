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
const blogPostsModelBuilder = require('./Users');
const postCategoriesModelBuilder = require('./Categories');

const Users = usersModelBuilder(sequelize, DataTypes);
const Categories = categoriesModelBuilder(sequelize, DataTypes);
const Posts = blogPostsModelBuilder(sequelize, DataTypes);
const PostsCategories = postCategoriesModelBuilder(sequelize, DataTypes);

Object.values(sequelize.models).forEach((model) => {
  model.associate(sequelize.models);
});
  
module.exports = {
  Users,
  Categories,
  Posts,
  PostsCategories,
};
