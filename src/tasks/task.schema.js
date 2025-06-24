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