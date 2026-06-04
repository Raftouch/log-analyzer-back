const express = require("express");
const {
  getLogs,
  getAnalysis,
  getSeverity,
} = require("../controllers/application");
const router = express.Router();

router.get("/", getLogs);

router.get("/analysis", getAnalysis);

router.get("/severity", getSeverity);

module.exports = router;
