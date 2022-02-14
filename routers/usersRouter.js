const express = require('express');

const router = express.Router();

const User = require('../controllers/usersController');

const { verifyName, verifyEmail, verifyPassword,
  verifyIfExists } = require('../middlewares/verificationsUser');

router
  .get('/', User.getAll)
  .post('/', verifyName, verifyEmail, verifyPassword, verifyIfExists, User.create);

module.exports = router;
