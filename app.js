const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT || 4000;

const parseLogs = require("./src/parser");
const applicationLogs = parseLogs("./logs/application.log");
const systemLogs = parseLogs("./logs/system.log");
// console.log("Application logs : ", applicationLogs);
// console.log("System logs : ", systemLogs);

const analyzeLogs = require("./src/analyzer");
const analyzedApplicationLogs = analyzeLogs(applicationLogs);
const analyzedSystemLogs = analyzeLogs(systemLogs);
// console.log("Analyzed application logs : ", analyzedApplicationLogs);
// console.log("Analyzed system logs : ", analyzedSystemLogs);

const getSeverityLevel = require("./src/severity");
console.log(
  "Severity for application logs : ",
  getSeverityLevel(analyzedApplicationLogs),
);
console.log(
  "Severity for system logs : ",
  getSeverityLevel(analyzedSystemLogs),
);

const start = () => {
  try {
    app.listen(port, () => console.log(`App listening on port ${port}`));
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
