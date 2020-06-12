<img align="right" width="100" height="100" src="./client/public/logo512.png" />

# Customer Data Application

This is a simple React app with an Express API for viewing customer and account data.

View the demo [here](https://customer-data-app.herokuapp.com).

## Local Development Setup

1. Clone the repository
   - `git clone https://github.com/milespratt/customer-data-app.git`
2. Navigate to the new directory
   - `cd customer-data-app`
3. Install dependencies
   - `npm run setup`
4. Run the server
   - Development `npm run dev`
     - You can now access the app at [http://localhost:3000](http://localhost:3000)
     - Any changes to the server or client code will cause the development environment to restart automatically.

## Testing

Tests are run via [Mocha](https://mochajs.org/) and [Chai](https://www.chaijs.com/) with [Istanbul](https://istanbul.js.org/) for code coverage.

New tests should be added to the `/tests` directory with a `.test.js` extension.

Run tests via the `npm test` command.

## Building for Production

1. Build the front-end files
   - `npm run build`
2. Start the production build
   - `npm start`
3. Access the the app at [http://localhost:3001](http://localhost:3001)
