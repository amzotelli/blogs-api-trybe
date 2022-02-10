const verifyName = (req, res, next) => {
  const { displayName } = req.body;
  if (displayName.length < 8) {
    return res.status(400).json(
      { message: '\'displayName\' length must be at least 8 characters long' },
    );
  }
  next();
};

const verifyEmail = (req, res, next) => {
  const { email } = req.body;
  if (!email.includes('@') || !email.includes('.com') || email.length < 8) { 
    return res.status(400).json({ message: '\'email\' must be a valid email' });
  }
  next();
};

module.exports = {
  verifyName,
  verifyEmail,
};
