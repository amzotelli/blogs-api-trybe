module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  },
    {
      timestamps: false,
    });
  
  // Users.findAllClean = () =>
  //   Users.findAll().then((users) =>
  //   users.map((user) => user.dataValues));
  
  // Users.associate = (models) => {
  //   Users.hasMany(models.BlogPosts, { foreignKey: 'userId', targetKey: 'id' });
  // };

  return Users;
};
