module.exports = (sequelize, DataTypes) => {
  sequelize.define('PostsCategories', {
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
  });
};
