const express = require('express');

const router = express.Router();
const User = require('../services/usersService');

router.get('/', async (_req, res) => {
  try {
    const users = await User.getAll();

    return res.status(200).json(users);
  } catch (e) {
    res.status(500).json(e);
  }
});

router.post('/', async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    const newUser = await User.create({ displayName, email, password, image });

    return res.status(201).json(newUser);
  } catch (e) {
    res.status(500).json(e);
  }
});
  
module.exports = router;
