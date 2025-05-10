const express = require("express");
const app = express();
const port = 3001; // any num between 0 - 65,535

// creates GET route
app.get("/", (req, res)=>{
  console.log("Request method", req.method)
  res.send("Hello world!");
});

// creates POST route
app.post("/", (req, res)=>{
  console.log("Request method", req.method)
  res.send("Hello world!");
});

// creates PUT route
app.put("/", (req, res)=>{
  console.log("Request method", req.method)
  res.send("Hello world!");
});

// creates PATCH route
app.patch("/", (req, res)=>{
  console.log("Request method", req.method)
  res.send("Hello world!");
});

// creates DELETE route
app.delete("/", (req, res)=>{
  console.log("Request method", req.method)
  res.send("Hello world!");
});

// Starts the server and listens for incoming requests on the specified port
app.listen(port, ()=>{
  console.log(`App listening on port no: ${port}`);
});