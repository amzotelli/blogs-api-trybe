module.exports = (sequelize, DataTypes) => {
  sequelize.define('Categories', {
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
  });
};
