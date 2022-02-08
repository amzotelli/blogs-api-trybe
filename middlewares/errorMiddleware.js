const errorMiddleware = (err, _req, res, _next) => {
  const status = err.status || 500;
  res.status(status).end();
};

module.exports = errorMiddleware;
