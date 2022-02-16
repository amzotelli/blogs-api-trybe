const { User } = require('../models');

const getAll = async () => User.findAllClean();

const create = async (user) => {
  const alreadyExists = await User.findOne({ where: { email: user.email } });
  if (alreadyExists) return { status: true, message: 'User already registered' };
  const newUser = await User.create(user);
  return newUser;
};

const getById = async (id) => User.findByPk(id);

module.exports = {
  getAll,
  create,
  getById,
};
