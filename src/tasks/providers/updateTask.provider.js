const Task = require("../task.schema.js");
const { matchedData } = require("express-validator");
const { StatusCodes } = require("http-status-codes");
const errorLogger = require("../../helpers/errorLogger.helper.js");

async function updateTaskProvider(req, res) {
  const validatedData = matchedData(req);

  try {
    // fetch ID
    const task = await Task.findById(req.body["_id"]);

    // update task
    task.title = validatedData.title || task.title;
    task.description = validatedData.description || task.description;
    task.dueDate = validatedData.dueDate || task.dueDate;
    task.priority = validatedData.priority || task.priority;
    task.status = validatedData.status || task.status;
    
    //save task
    await task.save();

    return res.status(StatusCodes.OK).json(task);
  } catch (error) {
    errorLogger("Error while updating tasks", req, error);
    return res.status(StatusCodes.GATEWAY_TIMEOUT).json({
      reason:
        "Unable to process your request at the moment, please try again later.",
    });
  }
}

module.exports = updateTaskProvider;


// note:
/*
the "|| task. title" part is used to keep the existing value if the new value
is not provided in the request body. This way, only the fields that are provided
in the request will be updated, while the others will remain unchanged.
same for the other fields like description, dueDate, status, and priority.
This is a common pattern in update operations to ensure that only the fields
that are intended to be changed are modified, while the rest of the document
remains intact.
*/ 

