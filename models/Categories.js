module.exports = (sequelize, DataTypes) => {
  sequelize.define('categories', {
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
  });
};
