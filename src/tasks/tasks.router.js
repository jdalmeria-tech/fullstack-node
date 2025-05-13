const express = require('express');
const tasksRouter = express.Router();

tasksRouter.get("/tasks", (req, res) => {
  return res.send("Hello from tasks router");
});

tasksRouter.post("/tasks", (req, res) => {
  console.log(req.body);
  return res.send("Create new task");
});

// exports the tasksRouter, so we can use it
module.exports = tasksRouter;