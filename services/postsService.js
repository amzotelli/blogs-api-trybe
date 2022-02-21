const { BlogPost, User, Category } = require('../models');
const UserService = require('./usersService');
const authentication = require('../middlewares/authMiddleware');

const authenticate = async (token) => {
  const { email } = authentication(token);
  const { id: userId } = await UserService.getByEmail(email);
  return userId;
};

const getAll = async () => {
  const posts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user' },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return posts;
};

const create = async ({ id, title, content, userId, published = new Date(),
  updated = new Date() }) => {
  const newPost = await BlogPost.create({ id, title, content, userId, published, updated });
  return newPost.dataValues;
};

module.exports = {
  authenticate,
  getAll,
  create,
};
