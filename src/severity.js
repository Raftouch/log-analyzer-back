const getSeverityLevel = (output) => {
  const score = output.warn * 1 + output.error * 3;

  let level;

  if (score > 10) {
    level = "CRITICAL";
  } else if (score > 5) {
    level = "HIGH";
  } else if (score > 2) {
    level = "MEDIUM";
  } else {
    level = "LOW";
  }

  return { score, level };
};

module.exports = getSeverityLevel;
