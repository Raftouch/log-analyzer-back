const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT || 4000;

const parseLogs = require("./src/parser");
const applicationLogs = parseLogs("./logs/application.log");
const systemLogs = parseLogs("./logs/system.log");
console.log("Application logs : ", applicationLogs);
console.log("System logs : ", systemLogs);

const start = () => {
  try {
    app.listen(port, () => console.log(`App listening on port ${port}`));
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
