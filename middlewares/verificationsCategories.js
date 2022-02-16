const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9G8';

const verifyName = (req, res, next) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: '"name" is required' });
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
  verifyToken,
};
