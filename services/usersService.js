const { Users } = require('../models');

const getAll = async () => Users.findAllClean();

module.exports = {
  getAll,
};
