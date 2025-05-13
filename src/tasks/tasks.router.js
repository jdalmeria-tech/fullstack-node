const express = require('express');
const tasksRouter = express.Router();

tasksRouter.get("/tasks", (req, res) => res.send("All tasks"));

tasksRouter.post("/tasks", (req, res) => res.send("Create new task"));

// exports the tasksRouter, so we can use it
module.exports = tasksRouter;