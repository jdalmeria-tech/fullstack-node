const {getReasonPhrase} = require("http-status-codes");

function responseFormatter(req, res, next) {
  const originalJson = res.json;

  res.json = (data) => {
    const response = {
      status: res.statusCode >= 200 && res.statusCode < 300 ? "Success" : "Error",
      statusCode: res.statusCode,
      message: getReasonPhrase(res.statusCode),
      data: data,
    };

    // Call the original res.json method with the formatted response
    originalJson.call(res, response);
  };
  // Call the next middleware in the stack
  next();
}

module.exports = responseFormatter;