const { Categories } = require('../models');

const create = async (name) => {
  const category = await Categories.create({ name });
  return category;
};

module.exports = {
  create,
};
