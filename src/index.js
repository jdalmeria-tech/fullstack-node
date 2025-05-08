const express = require("express");
const app = express();
const port = 3001; // any num between 0 - 65,535

// creates get route
app.get("/:category", (req, res)=>{
  console.log("Request URL:", req.url);
  console.log("Request Params:", req.params);
  console.log("Request Query:", req.query);
  console.log("Request Headers:", req.headers);
  console.log("Request Method:", req.method);




  res.send("Hello world!");
});

app.listen(port, ()=>{
  console.log(`App listening on port no: ${port}`);
});