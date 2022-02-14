const User = require('../services/usersService');

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjo1LCJkaXNwbGF5TmFtZSI6InVzdWFyaW8gZGUgdGVzdGUiLCJlbWFpbCI6InRlc3RlQGVtYWlsLmNvbSIsImltYWdlIjoibnVsbCJ9LCJpYXQiOjE2MjAyNDQxODcsImV4cCI6MTYyMDY3NjE4N30.Roc4byj6mYakYqd9LTCozU1hd9k_Vw5IWKGL4hcCVG8';

const getAll = async (_req, res) => {
  try {
    const users = await User.getAll();
    return res.status(200).json(users);
  } catch (e) {
    res.status(500).json(e);
  }
};

 const create = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    await User.create({ displayName, email, password, image });
    return res.status(201).json(token);
  } catch (e) {
    res.status(500).json(e);
  }
};
  
module.exports = {
  getAll,
  create,
};
