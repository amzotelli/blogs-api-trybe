module.exports = (sequelize, DataTypes) => {
  const PostsCategories = sequelize.define('PostsCategories', {
    postId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
  },  
  {
    timestamps: false,
    underscored: true,
    tableName: 'PostsCategories',
    });
  
  return PostsCategories;
};
