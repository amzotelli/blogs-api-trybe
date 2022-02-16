const { Category } = require('../models');

const create = async (name) => {
  const category = await Category.create({ name });
  return category;
};

const getAll = async () => Category.findAll();

const getById = async (id) => Category.findByPk(id);

module.exports = {
  create,
  getAll,
  getById,
};
