const express = require('express');

const router = express.Router();

const Post = require('../controllers/postsController');

const { verifyInputs, verifyToken } = require('../middlewares/verificationsPost');

router
  .post('/', verifyInputs, verifyToken, Post.create);

  module.exports = router;
