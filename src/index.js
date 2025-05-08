const express = require("express");
const app = express();
const port = 3001; // any num between 0 - 65,535

// creates get route
app.get("/", (req, res)=>{
  console.log(req);
  res.send("Hello world!");
});

app.listen(port, ()=>{
  console.log(`App listening on port no: ${port}`);
});