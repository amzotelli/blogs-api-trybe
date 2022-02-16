const { Categories } = require('../models');

const create = async (name) => {
  const category = await Categories.create({ name });
  return category;
};

const getAll = async () => Categories.findAll();

module.exports = {
  create,
  getAll,
};
