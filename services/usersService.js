const jwt = require('jsonwebtoken');

const { User } = require('../models');

const getAll = async () => User.findAllClean();

const create = async (user) => {
  const alreadyExists = await User.findOne({ where: { email: user.email } });
  if (alreadyExists) return { code: 409, message: 'User already registered' };
  const { id, displayName, email } = await User.create(user);
  const payload = {
    id,
    displayName,
    email,
  };
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    algorithm: 'HS256',
    expiresIn: '1h',
  });
  return token;
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

const login = async (email, password) => {
  const user = await User.findOne({ where: { email } });
  if (!user || user.password !== password) return { code: 400, message: 'Invalid fields' };
    const payload = {
    email,
  };
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    algorithm: 'HS256',
    expiresIn: '1h',
  });
  return token;
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
  login,
};
