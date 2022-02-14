module.exports = (sequelize, DataTypes) => {
  const Posts = sequelize.define('BlogPosts', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
    userId: DataTypes.INTEGER,
  },
    {
    timestamps: false,
  });

  Posts.associate = (models) => {
    Posts.belongsTo(models.Users, { foreignKey: 'userId' });
  };
};
