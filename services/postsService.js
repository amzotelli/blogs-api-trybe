const { BlogPost } = require('../models');
const User = require('./usersService');
const authentication = require('../middlewares/authMiddleware');

const authenticate = async (token) => {
  const { email } = authentication(token);
  const { id: userId } = await User.getByEmail(email);
  return userId;
};

const getAll = async () => BlogPost.findAll();

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
