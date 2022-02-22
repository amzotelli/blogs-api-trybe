const Post = require('../services/postsService');
const Category = require('../services/categoriesService');

const getAll = async (_req, res) => {
  try {
    const posts = await Post.getAll();
    return res.status(200).json(posts);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const create = async (req, res) => {
  const { title, content, categoryIds } = req.body;  
  const token = req.headers.authorization;
  const userId = await Post.authenticate(token);

  const verifyIfCategoryExists = await Category.getById(categoryIds);
  if (!verifyIfCategoryExists) return res.status(400).json({ message: '"categoryIds" not found' });

  const post = await Post.create({ title, content, userId });
  return res.status(201).json({ ...post });
};

const getById = async (req, res) => {
  const { id } = req.params;
  const post = await Post.getById(id);
  if (!post) return res.status(404).json({ message: 'Post does not exist' });
  return res.status(200).json(post);
};

module.exports = {
  getAll,
  create,
  getById,
};
