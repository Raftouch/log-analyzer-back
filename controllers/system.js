const parseLogs = require("../src/parser");
const analyzeLogs = require("../src/analyzer");
const getSeverityLevel = require("../src/severity");

const systemLogs = parseLogs("./logs/system.log");
const analyzedSystemLogs = analyzeLogs(systemLogs);

const getLogs = (req, res) => {
  res.json(systemLogs);
};

const getAnalysis = (req, res) => {
  res.json(analyzedSystemLogs);
};

const getSeverity = (req, res) => {
  res.json(getSeverityLevel(analyzedSystemLogs));
};

module.exports = { getLogs, getAnalysis, getSeverity };
