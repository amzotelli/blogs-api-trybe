module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    // id primary key source: https://sequelize.org/v6/manual/legacy.html
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: 'Categories',
    });
  
  return Category;
};
