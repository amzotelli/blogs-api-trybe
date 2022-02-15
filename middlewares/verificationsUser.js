const User = require('../services/usersService');

const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9G8';

const verifyName = (req, res, next) => {
  const { displayName } = req.body;
  if (displayName.length < 8) {
    return res.status(400).json(
      { message: '"displayName" length must be at least 8 characters long' },
    );
  }
  next();
};

function verifyEmail(req, res, next) {
  const { email } = req.body;
  const regexEmail = /\S+@\S+\.\S+/; 
  if (!email) res.status(400).json({ message: '"email" is required' });
  if (!regexEmail.test(email)) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }
      next();
}

const verifyPassword = (req, res, next) => {
  const { password } = req.body;
  if (!password) res.status(400).json({ message: '"password" is required' });
  if (password.length !== 6) {
    return res.status(400).json({ message: '"password" length must be 6 characters long' });
  }
  next();
};

const verifyIfExists = async (req, res, next) => {
const { email } = req.body;
try {
  const user = await User.findEmail(email);
  if (user) res.status(409).json({ message: 'User already registered' });
} catch (e) {
  res.status(500).json(e);
}
next();
};

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ message: 'Token not found' });
  if (token !== authToken) return res.status(401).json({ message: 'Expired or invalid token' });
  next();
};
  
module.exports = {
  verifyName,
  verifyEmail,
  verifyPassword,
  verifyIfExists,
  verifyToken,
};
