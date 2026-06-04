const fs = require("fs");

const parseLogs = (filePath) => {
  const content = fs.readFileSync(filePath, "utf-8");

  return content
    .split("\n")
    .filter((line) => line.trim())
    .map((line) => {
      const parts = line.split(" ");

      return {
        timestamp: `${parts[0]} ${parts[1]}`,
        level: parts[2],
        message: parts.slice(3).join(" "),
      };
    });
};

module.exports = parseLogs;
