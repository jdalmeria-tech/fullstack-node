const express = require("express");
const tasksRouter = require("./tasks/tasks.router.js");

const app = express();
const port = 3001; // any num between 0 - 65,535

const middleWare = function (req, res, next){
  req.info = {appname: "Task Manager", author: "jdalmeria-tech"};
  next();
}

app.use(middleWare);

// define routes
app.use("/", tasksRouter); // this is a middleware

// Starts the server and listens for incoming requests on the specified port
app.listen(port, ()=>{
  console.log(`App listening on port no: ${port}`);
});