const express = require('express');

const router = express.Router();

const Login = require('../controllers/usersController');

const { verifyEmail, verifyPassword, verifyEntries } = require('../middlewares/verificationsLogin');

router.post('/', verifyEntries, verifyEmail, verifyPassword, Login.login);

module.exports = router;
