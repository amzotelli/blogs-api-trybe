module.exports = (sequelize, DataTypes) => {
  sequelize.define('PostsCategories', {
    postId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
  },  
  {
    timestamps: false,
    underscored: true,
    tableName: 'PostsCategories',

  });
};
