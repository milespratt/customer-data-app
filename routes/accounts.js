// import dependencies
const express = require("express");
const accountsRouter = express.Router();

// import controller
const accountController = require("../controllers/accountController");

// get all accounts
accountsRouter.get("/", async (req, res) => {
  const accounts = accountController.getAccounts();
  res.json({ accounts });
});

// get all accounts for a customer
accountsRouter.get("/customer/:customerID", async (req, res) => {
  const { customerID } = req.params;
  const customerAccounts = await accountController.getCustomerAccounts(
    customerID
  );
  res.json({ customerAccounts });
});

module.exports = accountsRouter;
