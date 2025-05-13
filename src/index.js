const express = require("express");
const tasksRouter = require("./tasks/tasks.router.js");

const app = express();
const port = 3001; // any num between 0 - 65,535

app.use(express.json()); // middleware to parse JSON data from incoming requests

// define routes
app.use("/", tasksRouter); // this is a middleware

// Starts the server and listens for incoming requests on the specified port
app.listen(port, ()=>{
  console.log(`App listening on port no: ${port}`);
});