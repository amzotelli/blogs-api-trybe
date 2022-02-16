const Post = require('../services/postsService');

const getAll = async (req, res) => {
  try {
    const posts = await Post.getAll();
    return res.status(200).json(posts);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const create = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const userId = req.user.id;
  const post = await Post.create({ title, content, categoryIds, userId });
  if (post.status) return res.status(409).json({ message: post.message });
  return res.status(201).json({ id: post.id, userId, title: post.title, content: post.content });
};

module.exports = {
  getAll,
  create,
};
