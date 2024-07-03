// Export type definition for RowID
// This is a custom type that represents the unique identifier for a row
export type RowID = number;

// Export interface definition for RowElement
// This interface defines the structure of a row element, which has the following properties:
// - firstName: a string representing the first name
// - lastName: a string representing the last name
// - age: an optional number representing the age
export interface RowElement {
  firstName: string;
  lastName: string;
  age?: number;
}
