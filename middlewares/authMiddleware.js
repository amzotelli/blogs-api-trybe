require('dotenv').config();
const jwt = require('jsonwebtoken');
const usersService = require('../services/usersService');

const { JWT_SECRET } = process.env;

const jwtConfig = { algorithms: ['HS256'] };

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;
  try {
    const { email } = jwt.verify(token, JWT_SECRET, jwtConfig);
    const user = await usersService.getByEmail(email);
    req.user = user;
    return next();
  } catch (err) {
    return res.status(401).json({ code: 'Unauthorized', message: err.message });
  }
};
