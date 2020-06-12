// import account data
const accounts = require("../db/initial.json").accounts;

exports.getAccounts = () => {
  return accounts;
};

exports.getCustomerAccounts = (customerID) => {
  const customerAccounts = accounts.filter((account) => {
    return account.customer_id == customerID;
  });
  return customerAccounts;
};
