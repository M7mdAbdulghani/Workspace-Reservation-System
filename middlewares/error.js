const ErrorResponse = require("../utils/errorResponse");
const errorHandler = (err, req, res, next) => {
  //Log for Dev
  console.log(err);

  let error = { ...err };
  error.message = err.message;

  let message;

  //Sequelize Duplicate Key
  if (err.name === "SequelizeUniqueConstraintError") {
    message = "Duplicate field key entered";
    error = new ErrorResponse(message, 400);
  }

  //Sequelize ValidationError
  if (err.name === "SequelizeValidationError") {
    message = Object.values(err.errors)
      .map((val) => val.message)
      .toString();
    error = new ErrorResponse(message, 400);
  }

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || "Server Error",
  });
};

module.exports = errorHandler;
