// Import the 'request' library for making HTTP requests
const request = require('request');

// Import the 'expect' assertion function from the 'chai' library
const { expect } = require('chai');

// Define a test suite for the API integration test
describe('API integration test', () => {
  // Define the base URL for the API
  const API_URL = 'http://localhost:7865';

  // Define a test case that checks the response of the GET / route
  it('GET / returns correct response', (done) => {
    // Make a GET request to the root URL of the API
    request.get(`${API_URL}/`, (_err, res, body) => {
      // Assert that the response status code is 200 (OK)
      expect(res.statusCode).to.be.equal(200);

      // Assert that the response body contains the expected text
      expect(body).to.be.equal('Welcome to the payment system');

      // Call the 'done' function to indicate that the test case is complete
      done();
    });
  });
});