const express = require("express");
const fs = require("fs");
const path = require("path");
const morgan = require("morgan");
const tasksRouter = require("./tasks/tasks.router.js");

const app = express();
const port = 3001; // any num between 0 - 65,535

app.use(express.json()); // JSON to object

let accessLogStream = fs.createWriteStream(
  path.join(__dirname, "..", "access.log"),
  {
    flags: "a", // append
  }
);

app.use(morgan("combined", { stream: accessLogStream })); // log to file

// define routes
app.use("/", tasksRouter); // this is a middleware

// Starts the server and listens for incoming requests on the specified port
app.listen(port, ()=>{
  console.log(`App listening on port no: ${port}`);
});