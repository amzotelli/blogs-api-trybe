const User = require('../services/usersService');

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9G8';

const getAll = async (_req, res) => {
  try {
    const users = await User.getAll();
    return res.status(200).json(users);
  } catch (e) {
    res.status(500).json(e);
  }
};

const create = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const alreadyExists = await User.findEmail(email);
  if (alreadyExists) res.status(409).json({ message: 'User already registered' });
  await User.create({ displayName, email, password, image });
  return res.status(201).json({ token });
};

module.exports = {
  getAll,
  create,
};
