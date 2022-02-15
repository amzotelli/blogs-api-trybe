const express = require('express');

const router = express.Router();

const Login = require('../controllers/loginController');
const { verifyEmail, verifyPassword } = require('../middlewares/verificationsLogin');

router.post('/', verifyEmail, verifyPassword, Login.login);

module.exports = router;
