const Categories = require('../services/categoriesService');

const create = async (req, res) => {
  const { name } = req.body;
  const category = await Categories.create(name);
  return res.status(201).json(category);
};

module.exports = {
  create,
};
