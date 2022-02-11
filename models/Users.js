module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  },
    {
      timestamps: false,
    });
  
  Users.findAllClean = () =>
    Users.findAll().then((users) =>
    users.map((user) => user.dataValues));
  
  Users.associate = (models) => {
    Users.hasMany(models.BlogPosts, { foreignKey: 'userId' });
  };

  return Users;
};
