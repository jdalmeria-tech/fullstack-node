const express = require("express");
const fs = require("fs");
const path = require("path");
const morgan = require("morgan");
const responseFormatter = require("./middleware/responseFormatter.js");
const { StatusCodes } = require("http-status-codes");
const tasksRouter = require("./tasks/tasks.router.js");
const authRouter = require("./auth/auth.router.js");
const usersRouter = require("./users/users.router.js");
const mongoose = require("mongoose");

const cors = require("cors");

const app = express();
const port = 3001; // any num between 0 - 65,535

app.use(express.json()); // JSON to object

const corsOptions = {
  origin: ["example.com", "example2.com"], // allow only this origin
};

// this is just during the development phase
app.use(cors());

let accessLogStream = fs.createWriteStream(
  path.join(__dirname, "..", "access.log"),
  {
    flags: "a", // append
  }
);

app.use(morgan("combined", { stream: accessLogStream })); // log to file
app.use(responseFormatter); // format the response

// define routes
app.use("/", tasksRouter);
app.use("/auth", authRouter);
app.use("/users", usersRouter);

app.use((req, res)=>{
  res.status(StatusCodes.NOT_FOUND).json(null);
});

async function bootstrap() {
  try{
    await mongoose.connect(
      "mongodb+srv://jdalmeria-tech:Pl67lc6g878cBOnZ@nodejs.jvonelh.mongodb.net/",
      { dbName: "fullstackTasks" }
    );
    console.log("Connected to MongoDB Atlas successfully");

    // Starts the server and listens for incoming requests on the specified port
    app.listen(port, ()=>{
     console.log(`App listening on port no: ${port}`);
   });
  } catch (error){
    console.log(error);
    process.exit(1); // exit the process with failure
  }
}

bootstrap();