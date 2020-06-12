// import customer data
const customers = require("../db/initial.json").customers;

exports.getCustomers = () => {
  return customers;
};

exports.getCustomer = (customerID) => {
  let customer;
  for (const customerRecord of customers) {
    if (customerRecord.id == customerID) {
      customer = customerRecord;
      break;
    }
  }

  // if customer, send it
  if (customer) {
    return customer;
  } else {
    // 404 if no customer found
    const error = new Error("Customer not found");
    error.statusCode = 404;
    throw error;
  }
};
