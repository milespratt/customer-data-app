// import dependencies
const express = require("express");
const customersRouter = express.Router();

// import controller
const customerController = require("../controllers/customerController");

// get all customers
customersRouter.get("/", async (req, res) => {
  const customers = customerController.getCustomers();
  res.json({ customers });
});

// get a single customer
customersRouter.get("/:customerID", async (req, res) => {
  const { customerID } = req.params;
  try {
    const customer = await customerController.getCustomer(customerID);
    res.json({ customer });
  } catch (error) {
    res.status(error.statusCode).json({ error: { message: error.message } });
  }
});

module.exports = customersRouter;
