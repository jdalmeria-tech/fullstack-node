const express = require("express");
const tasksRouter = require("./tasks/tasks.router.js");

const app = express();
const port = 3001; // any num between 0 - 65,535

// define routes
app.use("/", tasksRouter);

// Starts the server and listens for incoming requests on the specified port
app.listen(port, ()=>{
  console.log(`App listening on port no: ${port}`);
});