const cleanSet = (set, startString) => {
  // Initialize an empty array to store the cleaned values
  const strings = [];

  // Check if the startString is an empty string or not a string
  if (startString === '' || typeof startString !== 'string') {
    // If the startString is invalid, return an empty string
    return '';
  }

  // Iterate through the set and add the values that start with the startString to the strings array
  set.forEach((s) => {
    if (typeof s === 'string' && s.startsWith(startString)) {
      strings.push(s.slice(startString.length));
    }
  });

  // Join the cleaned values in the strings array with a hyphen and return the result
  return strings.join('-');
};

export default cleanSet;
