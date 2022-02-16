const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9G8';

const verifyInputs = (req, res, next) => {
  const { title, categoryIds, content } = req.body;
  if (!title) return res.status(400).json({ message: '"title" is required' });
  if (!content) return res.status(400).json({ message: '"content" is required' });
  if (!categoryIds) return res.status(400).json({ message: '"categoryId" is required' });
  next();
};

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ message: 'Token not found' });
  if (token !== authToken) return res.status(401).json({ message: 'Expired or invalid token' });
  next();
};

module.exports = {
  verifyInputs,
  verifyToken,
};
