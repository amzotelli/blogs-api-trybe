require('dotenv').config();
const jwt = require('jsonwebtoken');

const authentication = (token) => jwt.verify(token, process.env.JWT_SECRET);

module.exports = authentication;
