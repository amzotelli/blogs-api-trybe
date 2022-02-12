const { Users } = require('../models');

const getAll = async () => Users.findAllClean();

const create = async (displayName, email, password, image) => {
  const user = await Users.create({ displayName, email, password, image });
  return user.dataValues;
};

module.exports = {
  getAll,
  create,
};
