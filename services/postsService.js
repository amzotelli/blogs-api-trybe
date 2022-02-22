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

const getById = async (id) => {
  const post = await BlogPost.findOne({
    where: { id },
    include: [
      { model: User, as: 'user' },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return post;
};

const update = async ({ id, title, content, updated = new Date() }) => {
  await BlogPost.update({ title, content, updated }, { where: { id } });
  
  const post = await BlogPost.findOne({
    where: { id },
    attributes: ['title', 'content', 'userId'],
    include: { model: Category, as: 'categories', through: { attributes: [] } },
  });
  return post;
};

module.exports = {
  authenticate,
  getAll,
  create,
  getById,
  update,
};
