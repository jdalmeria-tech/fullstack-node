const express = require("express");
const { validationResult } = require("express-validator");
const tasksController = require("./tasks.controller.js");
const { StatusCodes } = require("http-status-codes");
const createTaskValidator = require("./validators/createTask.validator.js");
const getTasksValidator = require("./validators/getTasks.validator.js");
const updateTaskValidator = require("./validators/updateTask.validator.js");
const deleteTaskValidator = require("./validators/deleteTask.validator.js");
const authenticateToken = require("../middleware/authenticateToken.middleware.js");

const tasksRouter = express.Router();

/**
 * @swagger
 * 
 * components:
 *  securitySchemes:
 *    bearerAuth:
 *      type: http
 *      scheme: bearer
 *      bearerFormat: JWT
 * /tasks:
 *  get:
 *    summary: Get all tasks
 *    tags: [Tasks]
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - in: query
 *        name: limit
 *        schema:
 *          type: integer
 *          default: 10
 *        description: The number of tasks needed in a single response
 *      - in: query
 *        name: page
 *        schema:
 *          type: integer
 *          default: 1
 *        description: The page number of the tasks response
 *      - in: query
 *        name: order
 *        schema:
 *          type: string
 *          default: 'asc'
 *          enum: ['asc', 'desc']
 *        description: The order of the tasks response
 * 
 *    responses:
 *      200:
 *        description: Task created successfully
 *        content:
 *          application/json:
 *            example:
 *              status: success
 *              statusCode: 200
 *              message: Ok
 *              data:
 *                - _id: 683fba6f409ebd7d025de27a
 *                  title: "Create an MVP for online services"
 *                  description: "Create a minimum viable product for online services using Node.js, Express, and MongoDB"
 *                  status: "todo"
 *                  priority: "normal"
 *                  dueDate: 2025-05-05T12:00:00Z
 *      401:
 *        description: Unauthorized Error
 *        content:
 *          application/json:
 *            example:
 *              status: error
 *              statusCode: 401
 *              message: Unauthorized
 *              error:
 *                message: You are not authorized to access this resource.
 *      403:
 *        description: Forbidden Error
 *        content:
 *          application/json:
 *            example:
 *              status: error
 *              statusCode: 403
 *              message: Forbidden
 *              error:
 *                message: Invalid token. Please log in again.                
 */

tasksRouter.get(
  "/tasks",
  [getTasksValidator, authenticateToken],
  (req, res) => {
    const result = validationResult(req);

    if (result.isEmpty()) {
      return tasksController.handleGetTasks(req, res);
    } else {
      res.status(StatusCodes.BAD_REQUEST).json(result.array());
    }
  }
);

/**
 * @swagger
 * 
 * components:
 *  securitySchemes:
 *    bearerAuth:
 *      type: http
 *      scheme: bearer
 *      bearerFormat: JWT
 * /tasks:
 *  post:
 *    summary: Create a new task
 *    tags: [Tasks]
 *    security:
 *      - bearerAuth: []
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Task'
 *    responses:
 *      201:
 *        description: Task created successfully
 *        content:
 *          application/json:
 *            example:
 *              status: success
 *              statusCode: 201
 *              message: Created
 *              data:
 *                _id: 683fba6f409ebd7d025de27a
 *                title: "Create an MVP for online services"
 *                description: "Create a minimum viable product for online services using Node.js, Express, and MongoDB"
 *                status: "todo"
 *                priority: "normal"
 *                dueDate: 2025-05-05T12:00:00Z
 *      401:
 *        description: Unauthorized Error
 *        content:
 *          application/json:
 *            example:
 *              status: error
 *              statusCode: 401
 *              message: Unauthorized
 *              error:
 *                message: You are not authorized to access this resource.
 *      403:
 *        description: Forbidden Error
 *        content:
 *          application/json:
 *            example:
 *              status: error
 *              statusCode: 403
 *              message: Forbidden
 *              error:
 *                message: Invalid token. Please log in again.                
 */

tasksRouter.post(
  "/tasks",
  [createTaskValidator, authenticateToken],
  (req, res) => {
    const result = validationResult(req);

    if (result.isEmpty()) {
      return tasksController.handlePostTasks(req, res);
    } else {
      res.status(StatusCodes.BAD_REQUEST).json(result.array());
    }
  }
);

/**
 * @swagger
 * 
 * components:
 *  securitySchemes:
 *    bearerAuth:
 *      type: http
 *      scheme: bearer
 *      bearerFormat: JWT
 * /tasks:
 *  patch:
 *    summary: Updates a task
 *    tags: [Tasks]
 *    security:
 *      - bearerAuth: []
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/TaskUpdate'
 *    responses:
 *      200:
 *        description: Task updated successfully
 *        content:
 *          application/json:
 *            example:
 *              status: success
 *              statusCode: 200
 *              message: Ok
 *              data:
 *                _id: 683fba6f409ebd7d025de27a
 *                title: "Create an MVP for online services"
 *                description: "Create a minimum viable product for online services using Node.js, Express, and MongoDB"
 *                status: "todo"
 *                priority: "normal"
 *                dueDate: 2025-05-05T12:00:00Z
 *      401:
 *        description: Unauthorized Error
 *        content:
 *          application/json:
 *            example:
 *              status: error
 *              statusCode: 401
 *              message: Unauthorized
 *              error:
 *                message: You are not authorized to access this resource.
 *      403:
 *        description: Forbidden Error
 *        content:
 *          application/json:
 *            example:
 *              status: error
 *              statusCode: 403
 *              message: Forbidden
 *              error:
 *                message: Invalid token. Please log in again.                
 */

tasksRouter.patch(
  "/tasks",
  [updateTaskValidator, authenticateToken],
  (req, res) => {
    const result = validationResult(req);

    if (result.isEmpty()) {
      return tasksController.handlePatchTasks(req, res);
    } else {
      res.status(StatusCodes.BAD_REQUEST).json(result.array());
    }
  }
);

/**
 * @swagger
 * 
 * components:
 *  securitySchemes:
 *    bearerAuth:
 *      type: http
 *      scheme: bearer
 *      bearerFormat: JWT
 * /tasks:
 *  delete:
 *    summary: Deletes a task
 *    tags: [Tasks]
 *    security:
 *      - bearerAuth: []
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/TaskDelete'
 *    responses:
 *      200:
 *        description: Task deleted successfully
 *        content:
 *          application/json:
 *            example:
 *              status: success
 *              statusCode: 200
 *              message: Ok
 *              data:
 *                acknowledged: true
 *                deletedCount: 1
 *               
 *      401:
 *        description: Unauthorized Error
 *        content:
 *          application/json:
 *            example:
 *              status: error
 *              statusCode: 401
 *              message: Unauthorized
 *              error:
 *                message: You are not authorized to access this resource.
 *      403:
 *        description: Forbidden Error
 *        content:
 *          application/json:
 *            example:
 *              status: error
 *              statusCode: 403
 *              message: Forbidden
 *              error:
 *                message: Invalid token. Please log in again.                
 */

tasksRouter.delete(
  "/tasks",
  [deleteTaskValidator, authenticateToken],
  (req, res) => {
    const result = validationResult(req);

    if (result.isEmpty()) {
      return tasksController.handleDeleteTasks(req, res);
    } else {
      res.status(StatusCodes.BAD_REQUEST).json(result.array());
    }
  }
);

// exports the tasksRouter, so we can use it
module.exports = tasksRouter;
