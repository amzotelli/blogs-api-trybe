const jwt = require('jsonwebtoken');

const { User } = require('../models');

const getAll = async () => User.findAllClean();

const create = async (user) => {
  const alreadyExists = await User.findOne({ where: { email: user.email } });
  if (alreadyExists) return { code: 409, message: 'User already registered' };
  const { id, displayName: name, email } = await User.create(user);
  const payload = { id, name, email };
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    algorithm: 'HS256',
    expiresIn: '1h',
  });
  return { token };
};

const getById = async (id) => {
  const user = User.findByPk(id);
  if (!user) return { code: 404, message: 'User does not exist' };
  return user;
};

const login = async (email, password) => {
  const user = await User.findOne({ where: { email } });
  if (!user) return { code: 400, message: 'Invalid fields' };
    const payload = { email, password };
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    algorithm: 'HS256',
    expiresIn: '1h',
  });
  return { token };
};

const getByEmail = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user.dataValues;
};

module.exports = {
  getAll,
  create,
  getById,
  getByEmail,
  login,
};
