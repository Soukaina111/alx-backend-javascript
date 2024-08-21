// Import the utility functions from the './utils' module
const Utils = require('./utils');

// Define a function to send a payment request to an API
const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  // Calculate the total cost by summing the total amount and total shipping
  // using the calculateNumber method from the Utils module
  const totalCost = Utils.calculateNumber('SUM', totalAmount, totalShipping);

  // Log the total cost to the console
  console.log(`The total is: ${totalCost}`);
};

// Export the sendPaymentRequestToApi function so it can be used elsewhere in the application
module.exports = sendPaymentRequestToApi;