const Categories = require('../services/categoriesService');

const create = async (req, res) => {
  try {
    const category = await Categories.create(req.body.name);
    return res.status(201).json(category);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const getAll = async (req, res) => {
  try {
    const categories = await Categories.getAll();
    return res.status(200).json(categories);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Categories.getById(id);
    if (!category) return res.status(404).json({ message: 'Category not found' });
    return res.status(200).json(category);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  create,
  getAll,
  getById,
};
