const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT || 4000;

const parseLogs = require("./src/parser");
const systemLogs = parseLogs("./logs/system.log");
// console.log("System logs : ", systemLogs);

const analyzeLogs = require("./src/analyzer");
const analyzedSystemLogs = analyzeLogs(systemLogs);
// console.log("Analyzed system logs : ", analyzedSystemLogs);

const getSeverityLevel = require("./src/severity");
// console.log(
//   "Severity for system logs : ",
//   getSeverityLevel(analyzedSystemLogs),
// );

app.use("/logs/application", require("./routes/application"));

const start = () => {
  try {
    app.listen(port, () => console.log(`App listening on port ${port}`));
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
