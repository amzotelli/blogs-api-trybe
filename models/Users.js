module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  },
    {
      timestamps: false,
      tableName: 'Users',
    });
  
  User.findAllClean = () =>
    User.findAll().then((user) =>
    user.map((users) => users.dataValues));
  
  User.associate = (models) => {
    User.hasMany(models.BlogPost, { foreignKey: 'userId', as: 'users' });
  };

  return User;
};
