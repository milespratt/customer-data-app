// import dependencies
const express = require("express");
const accountsRouter = express.Router();

// import controller
const accountController = require("../controllers/accountController");

// get all accounts
accountsRouter.get("/", async (req, res) => {
  try {
    const accounts = accountController.getAccounts();
    res.json({ accounts });
  } catch (error) {
    res
      .status(error.statusCode || 500)
      .json({ error: { message: error.message } });
  }
});

// get all accounts for a customer
accountsRouter.get("/customer/:customerID", async (req, res) => {
  const { customerID } = req.params;
  try {
    const customerAccounts = await accountController.getCustomerAccounts(
      customerID
    );
    res.json({ customerAccounts });
  } catch (error) {
    res
      .status(error.statusCode || 500)
      .json({ error: { message: error.message } });
  }
});

module.exports = accountsRouter;
