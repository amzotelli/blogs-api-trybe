const { Users } = require('../models');

const login = async ({ email, password }) => {
  const user = await Users.findOne({ where: { email } });
  if (!user || !password) return { status: true, message: 'Invalid fields' };
  return user;
};

module.exports = {
  login,
};
