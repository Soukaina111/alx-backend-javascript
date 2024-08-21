// Import the Express.js web application framework
const express = require('express');

// Create an Express app instance
const app = express();

// Define the port number for the server to listen on
const PORT = 7865;

// Define a route for the root URL ('/')
app.get('/', (_, res) => {
  // When a request is made to the root URL, send the response 'Welcome to the payment system'
  res.send('Welcome to the payment system');
});

// Start the server and listen for incoming requests on the specified port
app.listen(PORT, () => {
  // Log a message to the console when the server starts listening
  console.log(`API available on localhost port ${PORT}`);
});

// Export the Express app instance so it can be used elsewhere in the application
module.exports = app;