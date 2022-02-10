module.exports = (sequelize, DataTypes) => {
  sequelize.define('Blog Posts', {
    id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  });
};
