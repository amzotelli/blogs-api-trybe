const express = require('express');

const router = express.Router();

const User = require('../controllers/usersController');

const { verifyName, verifyEmail, verifyPassword,
  verifyToken } = require('../middlewares/verificationsUser');

router
  .get('/', verifyToken, User.getAll)
  .post('/', verifyName, verifyEmail, verifyPassword, User.create)
  .get('/:id', verifyToken, User.getById);

module.exports = router;
