// Function to calculate the result based on the specified operation type
const calculateNumber = (type, a, b) => {
    // Calculate the sum of the rounded numbers
    if (type === 'SUM') {
      return Math.round(a) + Math.round(b);
    }
    // Calculate the difference of the rounded numbers
    if (type === 'SUBTRACT') {
      return Math.round(a) - Math.round(b);
    }
    // Calculate the quotient of the rounded numbers, or return 'Error' if the divisor is 0
    if (type === 'DIVIDE') {
      return Math.round(b) === 0 ? 'Error' : Math.round(a) / Math.round(b);
    }
    // Return 0 if the operation type is not recognized
    return 0;
  };
  
  // Export the calculateNumber function so it can be used in other files
  module.exports = calculateNumber;