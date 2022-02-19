const { BlogPost } = require('../models');

const Category = require('../controllers/categoriesController');

const getAll = async () => BlogPost.findAll();

const create = async (post) => {
  const categoryExists = await Category.getById(post.categoryIds);
  if (!categoryExists) return { code: 400, message: '"categoryIds" not found' };
  const newPost = await BlogPost.create(post);
  return newPost;
};

module.exports = {
  getAll,
  create,
};
