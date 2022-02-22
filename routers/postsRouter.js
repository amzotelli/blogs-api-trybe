const express = require('express');

const router = express.Router();

const Post = require('../controllers/postsController');

const { verifyInputs, verifyToken } = require('../middlewares/verificationsPost');

router
  .post('/', verifyInputs, verifyToken, Post.create)
  .get('/', verifyToken, Post.getAll)
  .get('/:id', verifyToken, Post.getById);

  module.exports = router;
