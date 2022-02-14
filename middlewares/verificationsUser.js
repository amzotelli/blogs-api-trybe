const verifyName = (req, res, next) => {
  const { displayName } = req.body;
  if (displayName.length < 8) {
    return res.status(400).json(
      { message: '\'displayName\' length must be at least 8 characters long' },
    );
  }
  next();
};

function verifyEmail(req, res, next) {
  const { email } = req.body;
  const regexEmail = /\S+@\S+\.\S+/; 
  switch (email) {
    case !email:
      res.status(400).json({ message: '\'email\' is required' });
      break;
    case !regexEmail.test(email):
      res.status(400).json({ message: '\'email\' must be a valid email' });
      break;
    default:
      return next();
  }
}

module.exports = {
  verifyName,
  verifyEmail,
};
