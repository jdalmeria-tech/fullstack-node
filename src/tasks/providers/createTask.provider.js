const Task = require("../task.schema.js");
const { matchedData } = require("express-validator");
const { StatusCodes } = require("http-status-codes");
const logger = require("../../helpers/winston.helper.js");

async function createTaskProvider(req, res) {
  const validatedResult = matchedData(req);
  const task = new Task(validatedResult);

  try {
    await task.save();
    return res.status(StatusCodes.CREATED).json(task);
  } catch (error) {
    logger.error(`Error creating a new task: ${error.message}`, {
      metadata: {
        errorCode: error.code,
        errorName: error.name,
        method: req.method,
        url: req.originalUrl,
        error: error,
      }
    });
    return res.status(StatusCodes.GATEWAY_TIMEOUT).json({
      reason: "Unable to process your request at this time, please try again later.",
    });
  }
}

module.exports = createTaskProvider;
