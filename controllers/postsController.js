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
  // const userId = req.user.id;
  const { title, content, categoryIds } = req.body;
  // const verifyIfExists = categoryIds.map((categoryId) => categoryId)
  const post = await Post.create({ title, content, categoryIds });
  if (post.status) return res.status(409).json({ message: post.message });
  return res.status(201)
    .json({ id: post.id, userId: post.userId, title: post.title, content: post.content });
};

module.exports = {
  getAll,
  create,
};
