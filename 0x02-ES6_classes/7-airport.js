/**
 * Represents an airport with a name and a unique code.
 * The airport's code can be accessed as a string representation of the object.
 */
export default class Airport {
  /**
   * Creates a new Airport instance.
   * @param {string} name - The name of the airport.
   * @param {string} code - The unique code of the airport.
   */
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  /**
   * Gets the name of the airport.
   * @returns {string} The name of the airport.
   */
  get name() {
    return this._name;
  }

  /**
   * Sets the name of the airport.
   * @param {string} value - The new name of the airport.
   */
  set name(value) {
    this._name = value;
  }

  /**
   * Gets the unique code of the airport.
   * @returns {string} The code of the airport.
   */
  get code() {
    return this._code;
  }

  /**
   * Sets the unique code of the airport.
   * @param {string} value - The new code of the airport.
   */
  set code(value) {
    this._code = value;
  }

  /**
   * Provides a string representation of the airport object.
   * The string representation is the airport's unique code.
   * @returns {string} The airport's unique code.
   */
  get [Symbol.toStringTag]() {
    return this._code;
  }
}
