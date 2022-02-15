const User = require('../services/usersService');

const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9G8';

const getAll = async (req, res) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ message: 'Token not found' });
  if (token !== authToken) return res.status(401).json({ message: 'Expired or invalid token' });
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
  return res.status(201).json({ authToken });
};

module.exports = {
  getAll,
  create,
};
