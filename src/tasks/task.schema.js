// This file defines the schema for a task in a task management application using Mongoose.
const {Schema, model} = require("mongoose");

const taskSchema = new Schema({
  title: {
    type: String,
    required: [true, "Task title is required"],
    trim: true,
    maxlength: [100, "Task title cannot be more than 100 characters"],
  },
  description: {
    type: String,
    required: [true, "Task description is required"],
    trim: true,
    maxlength: [500, "Task description cannot be more than 500 characters"],
  },
  status: {
    type: String,
    required: [true, "Task status is required"],
    enum: ["todo", "inProgress", "completed"],
    default: "todo",
  },
  priority: {
    type: String,
    required: [true, "Task priority is required"],
    enum: ["low", "normal", "high"],
    default: "normal",
  },
  dueDate: {
    type: Date,
    required: [true, "Task due date is required"],
  },
  user: {type: Schema.Types.ObjectId, ref: "User", required: true}, // Reference to the User model
},
{ timestamps: true, versionKey: false } // Automatically manage createdAt and updatedAt fields
);

// Create the Task model using the task schema
const Task = model("Task", taskSchema);

// Export the Task model for use in other parts of the application
module.exports = Task;

/**
 * @swagger
 * 
 * components:
 *   schemas:
 *    Task:
 *     type: object
 *     required:
 *      - title
 *      - description
 *      - status
 *      - priority
 *      - dueDate
 *     properties:
 *      title:
 *       type: string
 *       description: The title of the task
 *       maxLength: 100
 *      description:
 *       type: string
 *       description: The description of the task
 *       maxLength: 500
 *      status:
 *       type: string
 *       description: The status of the task
 *       enum: ["todo", "inProgress", "completed"]
 *      priority:
 *       type: string
 *       description: The priority of the task
 *       enum: ["low", "normal", "high"]
 *      dueDate:
 *       type: string
 *       format: ISO8601 Date String
 *       description: The due date of the task in ISO8601 format
 *     example:
 *      title: "Create an MVP for online services"
 *      description: "Create a minimum viable product for online services using Node.js, Express, and MongoDB"
 *      status: "todo"
 *      priority: "normal"
 *      dueDate: 2025-05-05T12:00:00Z
 * */