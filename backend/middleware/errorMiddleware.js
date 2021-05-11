//When we go to a route that doesn't exist it throws an error into our "error handler"
exports.notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`); //this is how to throw an error
  res.status(404); //How did the errorhandler know to use this statuscode?
  next(error);
};

//err has to come first to override the built in error handler ,we are overriding it because the errorhandler is presenting html but we want json
exports.errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode; //i had an error,used req.statuscode ratherthan res.statuscode
  res.status(statusCode).json({
    message: err.message,
    //we don't want to have the error stack in production
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
  next();
};
