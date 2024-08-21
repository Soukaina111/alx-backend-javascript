// Import the Express.js web application framework
const express = require('express');

// Create an Express app instance
const app = express();

// Define the port number for the server to listen on
const PORT = 7865;

// Use the built-in Express.json middleware to parse JSON request bodies
app.use(express.json());

// Define a route for the root URL ('/')
app.get('/', (_req, res) => {
  // When a request is made to the root URL, send the response 'Welcome to the payment system'
  res.send('Welcome to the payment system');
});

// Define a route for the '/cart/:id' URL, where ':id' is a parameter that must be a number
app.get('/cart/:id(\\d+)', (req, res) => {
  // Get the value of the 'id' parameter from the URL
  const id = req.params.id;

  // Send a response with the payment methods for the given cart ID
  res.send(`Payment methods for cart ${id}`);
});

// Define a route for the '/available_payments' URL
app.get('/available_payments', (_req, res) => {
  // Send a JSON response with the available payment methods
  res.json({ payment_methods: { credit_cards: true, paypal: false } });
});

// Define a route for the '/login' URL
app.post('/login', (req, res) => {
  // Initialize a 'username' variable
  let username = '';

  // Check if the request body contains a 'userName' property
  if (req.body) {
    // If it does, set the 'username' variable to the value of 'userName'
    username = req.body.userName;
  }

  // Send a response with a greeting that includes the 'username'
  res.send(`Welcome ${username}`);
});

// Start the server and listen for incoming requests on the specified port
app.listen(PORT, () => {
  // Log a message to the console when the server starts listening
  console.log(`API available on localhost port ${PORT}`);
});

// Export the Express app instance so it can be used elsewhere in the application
module.exports = app;