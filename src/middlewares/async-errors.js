const asyncErrorHandler = (handle) => (req, res, next) =>
  handle(req, res).catch(next(error));

module.exports = asyncErrorHandler;
