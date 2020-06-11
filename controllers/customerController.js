// import customer data
const customers = require("../db/initial.json").customers;

exports.getCustomers = () => {
  return customers;
};

exports.getCustomer = (customerID) => {
  console.log(customerID);
  const customer = customers.filter((customer) => {
    return customer.id == customerID;
  });

  // if customer, send it
  if (customer.length === 1) {
    return customer[0];
  } else if (customer.length === 0) {
    // 404 if no customer found
    const error = new Error("Customer not found");
    error.statusCode = 404;
    throw error;
  }
};
