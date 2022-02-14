module.exports = (sequelize, DataTypes) => {
  const Posts = sequelize.define('BlogPosts', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  }, {
    tableName: 'BlogPosts',
  });
  Posts.associate = (models) => {
    Posts.belongsTo(models.Users, { foreignKey: 'userId' });
  };
  return Posts;
};
