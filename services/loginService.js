const { Users } = require('../models');

async function login({ email }) {
  const user = await Users.findOne({ where: { email } });
  return user.dataValues;
}

module.exports = {
  login,
};
