const User = require('../services/loginService');

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9G8';

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.login({ email, password });
  if (!user) return res.status(400).json({ message: 'Invalid fields' });
  return res.status(200).json({ token });
};

module.exports = {
 login,
};
