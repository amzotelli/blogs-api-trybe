const { Categories } = require('../models');

const create = async (name) => {
  const category = await Categories.create({ name });
  return category;
};

const getAll = async () => Categories.findAll();

const getById = async (id) => Categories.findByPk(id);

module.exports = {
  create,
  getAll,
  getById,
};
