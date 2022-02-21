module.exports = (sequelize, _DataTypes) => {
  const PostsCategory = sequelize.define('PostsCategory', {},  
    { timestamps: false, tableName: 'PostsCategories' });
  
    PostsCategory.associate = (models) => {
      models.BlogPost.belongsToMany(models.Category, {
        as: 'Categories',
        through: PostsCategory,
        foreignKey: 'postId',
        otherKey: 'categoryId',
      });
      models.Category.belongsToMany(models.BlogPost, {
        as: 'BlogPosts',
        through: PostsCategory,
        foreignKey: 'categoryId',
        otherKey: 'postId',
      });
    };
  
    return PostsCategory;
};
