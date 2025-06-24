const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const configureApp = require("./settings/config.js");

process.env.NODE_ENV = process.env.NODE_ENV || "development"; // set default env to development
const envFile = `.env.${process.env.NODE_ENV}`; // .env.development, .env.production, .env.test

dotenv.config({ path: envFile }); // load environment variables from the specified .env file
const app = express();
const port = parseInt(process.env.PORT); // better practice to use parseInt for port

app.use(express.json()); // JSON to object

configureApp(app);

async function bootstrap() {
  try {
    await mongoose.connect(process.env.DATABASE_URL, {
      dbName: process.env.DATABASE_NAME,
    });
    console.log("Connected to MongoDB Atlas successfully");

    // Starts the server and listens for incoming requests on the specified port
    app.listen(port, () => {
      console.log(`App listening on port no: ${port}`);
    });
  } catch (error) {
    console.log(error);
    process.exit(1); // exit the process with failure
  }
}

bootstrap();
