require("dotenv").config();

module.exports = {
  logMode: process.env.MORGAN_LOG_MODE || "dev",
  port: process.env.PORT || 3001,
};
