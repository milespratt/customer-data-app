export const endpoints = {
  accounts: process.env.REACT_APP_ACCOUNTS_ENDPOINT,
  customerAccounts: process.env.REACT_APP_CUSTOMER_ACCOUNTS_ENDPOINT,
  customers: process.env.REACT_APP_CUSTOMERS_ENDPOINT,
};

export const paths = {
  customer: "/customer",
};

export const params = {
  customer: "id",
};

export const apiDataKeys = {
  accounts: "accounts",
  customer: "customer",
  customerAccounts: "customerAccounts",
  customers: "customers",
};
