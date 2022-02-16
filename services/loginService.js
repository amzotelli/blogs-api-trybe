const { User } = require('../models');

const login = async ({ email, password }) => {
  const user = await User.findOne({ where: { email } });
  if (!user || !password) return { status: true, message: 'Invalid fields' };
  return user;
};

module.exports = {
  login,
};
