const parseLogs = require("../src/parser");
const analyzeLogs = require("../src/analyzer");
const getSeverityLevel = require("../src/severity");

const applicationLogs = parseLogs("./logs/application.log");
const analyzedApplicationLogs = analyzeLogs(applicationLogs);

const getLogs = (req, res) => {
  res.json(applicationLogs);
};

const getAnalysis = (req, res) => {
  res.json(analyzedApplicationLogs);
};

const getSeverity = (req, res) => {
  res.json(getSeverityLevel(analyzedApplicationLogs));
};

module.exports = { getLogs, getAnalysis, getSeverity };
