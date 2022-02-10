module.exports = (sequelize, DataTypes) => {
  const Posts = sequelize.define('Blog Posts', {
    id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  });

  Posts.associate = (models) => {
    Posts.belongsTo(models.Users, { foreignKey: 'userId' });
    Posts.belongsToMany(models.Categories, {
      through: 'Blog Posts Categories',
      foreignKey: 'postId',
    });
  };
};
