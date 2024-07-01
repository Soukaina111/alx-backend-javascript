const groceriesList = () => {
  // Create a new Map to store the grocery items and their quantities
  const map = new Map();

  // Add items and their quantities to the grocery list Map
  map.set('Apples', 10);
  map.set('Tomatoes', 10);
  map.set('Pasta', 1);
  map.set('Rice', 1);
  map.set('Banana', 5);

  // Return the grocery list Map
  return map;
};
