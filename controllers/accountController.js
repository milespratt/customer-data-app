// import customer data
const accounts = require("../db/initial.json").accounts;

exports.getAccounts = () => {
  return accounts;
};

exports.getCustomerAccounts = (customerID) => {
  try {
    const customerAccounts = accounts.filter((account) => {
      return account.customer_id == customerID;
    });
    return customerAccounts;
  } catch (err) {
    // 500 if something goes wrong
    const error = new Error(
      "Could not query customer accounts. Please try again."
    );
    error.statusCode = 500;
    throw error;
  }
};
