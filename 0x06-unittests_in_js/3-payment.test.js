// Import the sinon library for mocking and stubbing
const sinon = require('sinon');

// Import the utility functions from the './utils' module
const Utils = require('./utils');

// Import the expect assertion function from the chai library
const { expect } = require('chai');

// Import the sendPaymentRequestToApi function from the './3-payment' module
const sendPaymentRequestToApi = require('./3-payment');

// Describe a test suite for the sendPaymentRequestToApi function
describe('sendPaymentRequestToApi', () => {
  // Define a test case that checks if the function uses the calculateNumber method of the Utils module
  it('sendPaymentRequestToApi uses the calculateNumber method of Utils', () => {
    // Create a spy on the Utils module to track its method calls
    const bigBrother = sinon.spy(Utils);

    // Call the sendPaymentRequestToApi function with some sample data
    sendPaymentRequestToApi(100, 20);

    // Assert that the calculateNumber method was called with the expected arguments
    expect(bigBrother.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    expect(bigBrother.calculateNumber.callCount).to.be.equal(1);

    // Restore the original calculateNumber method to avoid side effects
    bigBrother.calculateNumber.restore();
  });
});