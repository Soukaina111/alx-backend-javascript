const groceriesList = () => {
  // Create a new Map to store the grocery items and their quantities
  const carte = new Map();

  // Add items and their quantities to the grocery list Map
  carte.set('Apples', 10);
  carte.set('Tomatoes', 10);
  carte.set('Pasta', 1);
  carte.set('Rice', 1);
  carte.set('Banana', 5);

  // Return the grocery list Map
  return carte;
};
