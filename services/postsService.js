const { BlogPosts } = require('../models/BlogPosts');

const getAll = async () => BlogPosts.findAll();

const create = async (post) => {
  const newPost = await BlogPosts.create(post);
  return newPost;
};

module.exports = {
  getAll,
  create,
};
