class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  /**
   * Sets the currency code.
   * @param {String} code - The currency code.
   */
  set code(code) {
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a String');
    }
    this._code = code;
  }

  get code() {
    return this._code;
  }

  /**
   * Sets the currency name.
   * @param {String} name - The currency name.
   */
  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a String');
    }
    this._name = name;
  }

  get name() {
    return this._name;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}

export default Currency;
