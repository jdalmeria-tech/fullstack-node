const express = require("express");
const { body, validationResult } = require("express-validator");
const tasksController = require("./tasks.controller.js");
const { StatusCodes } = require("http-status-codes");

const tasksRouter = express.Router();

tasksRouter.get("/tasks", tasksController.handleGetTasks);

tasksRouter.post(
  "/tasks",
  [
    body("title", "Title cannot be empty").notEmpty(),
    body("title", "Title must be a string").isString(),
    body("dueDate", "dueDate must be a valid ISO8601 string")
      .notEmpty()
      .isISO8601(),
  ],
  (req, res) => {
    const result = validationResult(req);
  
    if(result.isEmpty()){
      return tasksController.handlePostTasks(req, res);
    } else {
      res.status(StatusCodes.BAD_REQUEST).json(result.array());
    }
  }
);

tasksRouter.patch("/tasks", tasksController.handlePatchTasks);

tasksRouter.delete("/tasks", tasksController.handleDeleteTasks);

// exports the tasksRouter, so we can use it
module.exports = tasksRouter;
