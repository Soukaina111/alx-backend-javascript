/**
 * Represents a Holberton class with a size and a location.
 */
class HolbertonClass {
  /**
   * Creates a new HolbertonClass instance.
   * @param {number} size - The size of the Holberton class.
   * @param {string} location - The location of the Holberton class.
   */
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  /**
   * Gets the size of the Holberton class.
   * @returns {number} The size of the Holberton class.
   */
  get size() {
    return this._size;
  }

  /**
   * Gets the location of the Holberton class.
   * @returns {string} The location of the Holberton class.
   */
  get location() {
    return this._location;
  }

  /**
   * Provides a representation of the Holberton class based on the requested primitive type.
   * If the requested type is 'number', the size of the class is returned.
   * If the requested type is 'string', the location of the class is returned.
   * @param {string} hint - The requested primitive type ('number' or 'string').
   * @returns {number|string} The size or location of the Holberton class.
   */
  [Symbol.toPrimitive](hint) {
    switch (hint) {
      case 'number':
        return this._size;
      case 'string':
        return this._location;
      default:
        throw new TypeError(`Cannot convert HolbertonClass to ${hint}`);
    }
  }
}

export default HolbertonClass;
