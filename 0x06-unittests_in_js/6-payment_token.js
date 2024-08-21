// Define a function to get a payment token from an API
const getPaymentTokenFromAPI = (success) => new Promise((resolve, _reject) => {
    // Check if the 'success' parameter is truthy
    if (success) {
      // If 'success' is truthy, resolve the promise with an object containing a 'data' property
      resolve({ data: 'Successful response from the API' });
    }
    // If 'success' is falsy, the promise will be rejected (we're not handling the rejection here)
  });
  
  // Export the getPaymentTokenFromAPI function so it can be used elsewhere in the application
  module.exports = getPaymentTokenFromAPI;