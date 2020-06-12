// import dependencies
const express = require("express");
const path = require("path");

// import routers
const accountsRouter = require("./routes/accounts");
const customersRouter = require("./routes/customers");

// create express app
const app = express();

// configure logging
app.use(require("morgan")(process.env.logMode || "dev"));

// serve client build
app.use(express.static(path.join(__dirname, "./client/build")));

// configure routes
app.use("/api/accounts", accountsRouter);
app.use("/api/customers", customersRouter);

// handle bad routes
app.use("*", (req, res) => {
  res.status(404).send("404");
});

// start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`Your server is ready on port ${PORT}!`);
});

module.exports = app;
