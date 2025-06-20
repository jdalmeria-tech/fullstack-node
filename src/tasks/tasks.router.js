const express = require("express");
const { validationResult } = require("express-validator");
const tasksController = require("./tasks.controller.js");
const { StatusCodes } = require("http-status-codes");
const createTaskValidator = require("./validators/createTask.validator.js");
const getTasksValidator = require("./validators/getTasks.validator.js");
const updateTaskValidator = require("./validators/updateTask.validator.js");
const deleteTaskValidator = require("./validators/deleteTask.validator.js");

const tasksRouter = express.Router();

tasksRouter.get("/tasks", getTasksValidator, (req, res) => {
  const result = validationResult(req);

  if (result.isEmpty()) {
    return tasksController.handleGetTasks(req, res);
  } else {
    res.status(StatusCodes.BAD_REQUEST).json(result.array());
  }
});

tasksRouter.post("/tasks", createTaskValidator, (req, res) => {
  const result = validationResult(req);

  if (result.isEmpty()) {
    return tasksController.handlePostTasks(req, res);
  } else {
    res.status(StatusCodes.BAD_REQUEST).json(result.array());
  }
});

tasksRouter.patch("/tasks", updateTaskValidator, (req, res) => {
  const result = validationResult(req);

  if (result.isEmpty()) {
    return tasksController.handlePatchTasks(req, res);
  } else {
    res.status(StatusCodes.BAD_REQUEST).json(result.array());
  }
});

tasksRouter.delete("/tasks", deleteTaskValidator, (req, res) => {
  const result = validationResult(req);

  if (result.isEmpty()) {
    return tasksController.handleDeleteTasks(req, res);
  } else {
    res.status(StatusCodes.BAD_REQUEST).json(result.array());
  }
});

// exports the tasksRouter, so we can use it
module.exports = tasksRouter;
