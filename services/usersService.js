const { User } = require('../models');

const getAll = async () => User.findAllClean();

const create = async (user) => {
  const alreadyExists = await User.findOne({ where: { email: user.email } });
  if (alreadyExists) return { status: true, message: 'User already registered' };
  const newUser = await User.create(user);
  return newUser;
};

const getById = async (id) => {
  const user = User.findByPk(id);
  if (!user) {
    const error = new Error();
    error.message = 'User not found';
    error.code = 'NotFound';
    throw error;
  }
  return user.dataValues;
};

const getByEmail = async (email) => {
  const user = await User.findOne({
    attributes: { exclude: ['password'] }, where: { email },
  });
  if (!user) {
    const error = new Error();
    error.message = 'User not found';
    error.code = 'NotFound';
    throw error;
  }
  return user.dataValues;
};

module.exports = {
  getAll,
  create,
  getById,
  getByEmail,
};
