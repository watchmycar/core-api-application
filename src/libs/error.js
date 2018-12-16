
const handleError = (error) => {
  const INTERNAL_ERROR_CODE = 500;
  let errorBody;
  let statusCode;

  if (error.isBoom) {
    statusCode = error.output.statusCode;
    errorBody = error.output.payload;
  } else {
    statusCode = error.status || INTERNAL_ERROR_CODE;
    errorBody = { 
      statusCode,
      error: 'Internal Server Error', 
      message: error.message 
    };
  }

  const errorObject = {
    statusCode,
    errorBody,
  };

  return errorObject;
};

module.exports = {
  handleError,
};
