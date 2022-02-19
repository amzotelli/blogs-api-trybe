const User = require('../services/usersService');

const getAll = async (req, res) => {
    try {
    const users = await User.getAll();
    return res.status(200).json(users);
  } catch (e) {
    res.status(500).json(e);
  }
};

const create = async (req, res) => {
  const { code, message, token } = await User.create(req.body);
  if (code) return res.status(code).json({ message });
  return res.status(201).json({ token });
};

const getById = async (req, res) => {
  const { id } = req.params;
  const user = await User.getById(id);
  if (!user) return res.status(404).json({ message: 'User does not exist' });
  return res.status(200).json(user);
};

const login = async (req, res) => {
  try {
    const { email } = req.body;
    const { code, message, token } = await User.login(email);
    if (code) return res.status(code).json({ message });
    return res.status(200).json({ token });
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};

module.exports = {
  getAll,
  create,
  getById,
  login,
};
