const express = require('express');

const router = express.Router();

const User = require('../controllers/usersController');

router
  .post('/', User.create);

module.exports = router;
