const User = require('../services/usersService');

const getAll = async (_req, res) => {
  try {
    const users = await User.getAll();
    return res.status(200).json(users);
  } catch (e) {
    res.status(500).json(e);
  }
};

 const create = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    const newUser = await User.create({ displayName, email, password, image });
    return res.status(201).json(newUser);
  } catch (e) {
    res.status(500).json(e);
  }
};
  
module.exports = {
  getAll,
  create,
};
