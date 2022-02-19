const User = require('../services/usersService');

const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9G8';

const getAll = async (req, res) => {
    try {
    const users = await User.getAll();
    return res.status(200).json(users);
  } catch (e) {
    res.status(500).json(e);
  }
};

const create = async (req, res) => {
  const user = await User.create(req.body);
  if (user.status) return res.status(409).json({ message: user.message });
  return res.status(201).json({ authToken });
};

const getById = async (req, res) => {
  const { id } = req.params;
  const user = await User.getById(id);
  if (!user) return res.status(404).json({ message: 'User does not exist' });
  return res.status(200).json(user);
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.login({ email, password });
  if (user.status) return res.status(400).json({ message: user.message });
  return res.status(200).json({ token });
};

module.exports = {
  getAll,
  create,
  getById,
  login,
};
