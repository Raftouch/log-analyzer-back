const analyzeLogs = (logs) => {
  let output = {
    total: logs.length,
    info: 0,
    warn: 0,
    error: 0,
    warnings: {},
    errors: {},
  };

  logs.forEach((log) => {
    if (log.level === "INFO") output.info++;
    if (log.level === "WARN") {
      output.warn++;
      output.warnings[log.message] = (output.warnings[log.message] || 0) + 1;
    }
    if (log.level === "ERROR") {
      output.error++;
      output.errors[log.message] = (output.errors[log.message] || 0) + 1;
    }
  });

  return output;
};

module.exports = analyzeLogs;
