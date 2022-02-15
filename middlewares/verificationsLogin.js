const User = require('../services/loginService');

function verifyEmail(req, res, next) {
  const { email } = req.body;
  if (!email) res.status(400).json({ message: '"email" is required' });
  if (email === undefined || email === '') {
    return res.status(400).json({ message: '"email" is not allowed to be empty' });
  }
      next();
}

const verifyPassword = (req, res, next) => {
  const { password } = req.body;
  if (!password) res.status(400).json({ message: '"password" is required' });
  if (password === undefined || password === null || password === '') {
    return res.status(400).json({ message: '"password" is not allowed to be empty' });
  }
  next();
};

const verifyIfExists = async (req, res, next) => {
const { email } = req.body;
  try {
    const user = await User.findEmail(email);
    if (!user) res.status(400).json({ message: 'Invalid fields' });
  } catch (e) {
    res.status(500).json(e);
}
next();
};

module.exports = {
  verifyEmail,
  verifyPassword,
  verifyIfExists,
};
