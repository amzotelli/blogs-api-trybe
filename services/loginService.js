const { Users } = require('../models');

const login = async ({ email }) => {
  const user = await Users.findOne({ where: { email } });
  if (!user) return null;
};

module.exports = {
  login,
};
