const express = require('express');

const router = express.Router();

const Categories = require('../controllers/categoriesController');

const { verifyName, verifyToken } = require('../middlewares/verificationsCategories');

router
  .post('/', verifyToken, verifyName, Categories.create);

  module.exports = router;
