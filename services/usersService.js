const { Users } = require('../models');

const getAll = async () => Users.findAllClean();

const create = async (user) => {
  const alreadyExists = await Users.findOne({ where: { email: user.email } });
  if (alreadyExists) return { status: true, message: 'User already registered' };
  const newUser = await Users.create(user);
  return newUser;
};

const getById = async (id) => Users.findByPk(id);

module.exports = {
  getAll,
  create,
  getById,
};
