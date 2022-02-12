require('dotenv').config();

const { Sequelize, DataTypes } = require('sequelize');
const { development } = require('../config/config');

const sequelize = new Sequelize({ ...development });
 
const usersModelBuilder = require('./Users');
const categoriesModelBuilder = require('./Categories');
const blogPostsModelBuilder = require('./Users');
const postCategoriesModelBuilder = require('./Categories');

const Users = usersModelBuilder(sequelize, DataTypes);
const Categories = categoriesModelBuilder(sequelize, DataTypes);
const Posts = blogPostsModelBuilder(sequelize, DataTypes);
const PostsCategories = postCategoriesModelBuilder(sequelize, DataTypes);

// Object.values(sequelize.models).forEach((model) => {
//   model.associate(sequelize.models);
// });
  
module.exports = {
  Users,
  Categories,
  Posts,
  PostsCategories,
};
