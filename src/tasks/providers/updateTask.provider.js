const Task = require("../task.schema.js");

async function updateTaskProvider(req, res) {
  // fetch ID
  const task = await Task.findById(req.body["_id"]);
  // update task
  task.title = req.body.title;
  task.description = req.body.description;
  task.dueDate = req.body.dueDate;
  task.status = req.body.status;
  task.priority = req.body.priority;
  //save task
  return await task.save();
}

module.exports = updateTaskProvider;