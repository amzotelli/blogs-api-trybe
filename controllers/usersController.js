const User = require('../services/usersService');

const getAll = async (_req, res) => {
  const users = await User.getAll();
  res.status(200).json(users);
};

module.exports = {
  getAll,
};
