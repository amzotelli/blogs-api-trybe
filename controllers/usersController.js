const User = require('../services/usersService');

const getAll = async (_req, res) => {
  const users = await User.getAll();
  res.status(200).json(users);
};

const create = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const user = await User.create(displayName, email, password, image);
  res.status(201).json(user);
};
  
module.exports = {
  getAll,
  create,
};
