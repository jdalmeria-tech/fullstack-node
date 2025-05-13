const {StatusCodes, ReasonPhrases} = require("http-status-codes");

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

  res.status(StatusCodes.OK).json({
    status: "Success",
    statusCode: StatusCodes.OK,
    message: ReasonPhrases.OK,
    data: response,
  });
}

function handlePostTasks(req, res) {
  res.send("POST tasks controller");
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
