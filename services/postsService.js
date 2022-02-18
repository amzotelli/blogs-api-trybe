const { BlogPost } = require('../models');

const getAll = async () => BlogPost.findAll();

const create = async ({ title, content, categoryIds, published, updated }) => {
  const newPost = await BlogPost.create({ title, content, categoryIds, published, updated });
  return newPost;
};

module.exports = {
  getAll,
  create,
};
