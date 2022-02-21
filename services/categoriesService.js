const { Category } = require('../models');

const create = async (name) => {
  const category = await Category.create({ name });
  return category;
};

const getAll = async () => Category.findAll();

const getById = async (id) => {
  const mappedCategories = id.map(async (i) => Category.findByPk(i));
  const categories = await Promise.all(mappedCategories);
  return categories.every((c) => c);
};

module.exports = {
  create,
  getAll,
  getById,
};
