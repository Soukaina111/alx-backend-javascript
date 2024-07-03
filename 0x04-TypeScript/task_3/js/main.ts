// Import the necessary types from the interface file
import { RowID, RowElement } from './interface';

// Import the CRUD class
import CRUD from './crud';

// Create a new row object with the required properties
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

// Insert the new row and get the assigned row ID
const newRowID: RowID = CRUD.insertRow(row);

// Add an additional property to the row object
row.age = 23;

// Create a new variable to hold the updated row
const updatedRow: RowElement = row;

// Update the row with the new ID and the updated data
CRUD.updateRow(newRowID, updatedRow);

// Delete the row with the given ID
CRUD.deleteRow(newRowID);
