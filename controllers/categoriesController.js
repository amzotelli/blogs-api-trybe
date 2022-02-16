const Categories = require('../services/categoriesService');

const create = async (req, res) => {
  try {
    const category = await Categories.create(req.body.name);
    return res.status(201).json(category);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = {
  create,
};
