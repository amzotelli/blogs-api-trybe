const express = require('express');

const router = express.Router();

const Post = require('../controllers/postsController');

const { verifyInputs, verifyToken, verifyUpdate } = require('../middlewares/verificationsPost');

router
  .post('/', verifyInputs, verifyToken, Post.create)
  .get('/', verifyToken, Post.getAll)
  .get('/search', verifyToken, Post.search)
  .get('/:id', verifyToken, Post.getById)
  .put('/:id', verifyUpdate, verifyToken, Post.update)
  .delete('/:id', verifyToken, Post.deleteById);

  module.exports = router;
