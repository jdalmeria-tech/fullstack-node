const {StatusCodes, ReasonPhrases} = require("http-status-codes");
const createTaskProvider = require("./providers/createTask.provider.js");

function handleGetTasks(req, res) {
  let response = [
    {
      title: "Title of the task",
      date: "2025-01-01T12:00:00Z",
      description: "learn fullstack",
      priority: "normal",
      status: "todo",
    },
    {
      title: "Aspiring Fullstack Developer",
      date: "2025-01-01T12:00:00Z",
      description: "learn fullstack with react",
      priority: "normal",
      status: "todo",
    },
  ];

  res.status(StatusCodes.OK).json(response);
}

async function handlePostTasks(req, res) {
  const task = await createTaskProvider(req, res);
  res.status(StatusCodes.CREATED).json(task);
}

function handlePatchTasks(req, res) {
  res.send("PATCH tasks controller");
}

function handleDeleteTasks(req, res) {
  res.send("DELETE tasks controller");
}

module.exports = {
  handleGetTasks,
  handlePostTasks,
  handlePatchTasks,
  handleDeleteTasks,
};
