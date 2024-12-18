// helpers/responseHelper.js

const sendSuccessResponse = (res, message, data = null, statusCode = 200) => {
    const response = {
      success: true,
      message,
    };
  
    if (data !== null) {
      response.data = data;
    }
  
    return res.status(statusCode).json(response);
  };
  
  const sendFailureResponse = (res, message, statusCode = 500) => {
    return res.status(statusCode).json({
      success: false,
      message,
    });
  };
  
  module.exports = {
    sendSuccessResponse,
    sendFailureResponse,
  };
  