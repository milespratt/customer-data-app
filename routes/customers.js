// import dependencies
const express = require("express");
const customersRouter = express.Router();

// import controller
const customerController = require("../controllers/customerController");

// get all customers
customersRouter.get("/", async (req, res) => {
  try {
    const customers = customerController.getCustomers();
    res.json({ customers });
  } catch (error) {
    res
      .status(error.statusCode || 500)
      .json({ error: { message: error.message } });
  }
});

// get a single customer
customersRouter.get("/:customerID", async (req, res) => {
  const { customerID } = req.params;
  try {
    const customer = await customerController.getCustomer(customerID);
    res.json({ customer });
  } catch (error) {
    res
      .status(error.statusCode || 500)
      .json({ error: { message: error.message } });
  }
});

module.exports = customersRouter;
