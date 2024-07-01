const updateUniqueItems = (items) => {
  // Check if the input is a Map, if not, throw an error
  if (!(items instanceof Map)) {
    throw new Error('Cannot process');
  }

  // Iterate through the items in the Map
  for (const [k, v] of items.entries()) {
    // Check if the quantity of the current item is 1
    if (v === 1) {
      // If the quantity is 1, set it to 100
      items.set(k, 100);
    }
  }

  // Return the updated Map
  return items;
};

export default updateUniqueItems;
