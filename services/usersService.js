const { Users } = require('../models');

const getAll = async () => {
  const users = await Users.findAll();
  return users.map((user) => user.dataValues);
};

module.exports = {
  getAll,
};
