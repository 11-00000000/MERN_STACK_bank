const ApiError = require('../utils/ApiError');

const NotFoundError = (err, req, res, next) => {
  const error_obj = {
    code: err instanceof ApiError ? err.statusCode : 500,
    msg: err?.message || 'Internal Server Error',
    stack: err?.stack || ''
  };
  res.status(error_obj.code).send(error_obj);
};
module.exports = NotFoundError;
