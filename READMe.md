[![Build Status](https://travis-ci.com/milespratt/customer-data-app.svg?branch=master)](https://travis-ci.com/milespratt/customer-data-app) [![Maintainability](https://api.codeclimate.com/v1/badges/c4b46a62b79c11ead065/maintainability)](https://codeclimate.com/github/milespratt/customer-data-app/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/c4b46a62b79c11ead065/test_coverage)](https://codeclimate.com/github/milespratt/customer-data-app/test_coverage)

<img align="right" width="100" height="100" src="./client/public/logo512.png" />

# Customer Data Application

This is a simple application for viewing customer and account data.

The data is provided by a [Node/Express](https://expressjs.com/) API. The client is built with [React](https://reactjs.org/).

View the deployed app <a href="https://customer-data-app.herokuapp.com" target="_blank" rel="noreferrer noopener">here</a>.

## Requirements

You must have [NodeJS](https://nodejs.org/en/) installed to run this application.

## Local Development Setup

1. Clone the repository
   - `git clone https://github.com/milespratt/customer-data-app.git`
2. Navigate to the new directory
   - `cd customer-data-app`
3. Install dependencies
   - `npm run setup`
4. Run the development server
   - `npm run dev`
     - You can view the client in a browser at http://localhost:3000
     - You can access the API at http://localhost:3001. View the available [endpoints](#endpoints).
     - Any changes to the server or client code will cause the development environment to restart automatically.

## Endpoints

When running in development or production mode, the API endpoints can be accessed at http://localhost:3001.

| Path                               | Result                                                                                                              |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| /api/accounts                      | Returns a JSON object with an `accounts` key containing an array of all accounts.                                   |
| /api/customers                     | Returns a JSON object with a `customers` key containing an array of all customers.                                  |
| /api/customer/:customerID          | Returns a JSON object with a `customer` key containing an object with all customer data.                            |
| /api/accounts/customer/:customerID | Returns a JSON object with a `customerAccounts` key containing an array of all accounts for the specified customer. |

## Testing

Express API/controller tests are run via [Mocha](https://mochajs.org/) and [Chai](https://www.chaijs.com/) with [Istanbul](https://istanbul.js.org/) for code coverage.

React App tests are run via [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) with [Jest](https://jestjs.io/).

New Express tests should be added to the `/tests` directory. New React tests should be added to the `/client/src/tests` directory. All tests files should have the `.test.js` extension.

Run all tests with the `npm test` command.

## Building for Production

1. Build the front-end files
   - `npm run build`
2. Start the production build
   - `npm start`
3. Access the the app at http://localhost:3001
