const updateUniqueItems = (th) => {
  // Check if the input is a Map, if not, throw an error
  if (!(th instanceof Map)) {
    throw new Error('Cannot process');
  }

  // Iterate through the items in the Map
  for (const [a, b] of th.entries()) {
    // Check if the quantity of the current item is 1
    if (b === 1) {
      // If the quantity is 1, set it to 100
      th.set(a, 100);
    }
  }

  // Return the updated Map
  return th;
};

export default updateUniqueItems;
