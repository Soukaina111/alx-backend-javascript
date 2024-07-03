// Import necessary types
import { RowID, RowElement } from './interface';

// Insert a new row and return its ID
declare function insertRow(row: RowElement): RowID;

// Delete a row by its ID
declare function deleteRow(rowId: RowID): undefined;

// Update an existing row by its ID with new data
declare function updateRow(rowId: RowID, row: RowElement): RowID;
