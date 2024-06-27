import Currency from './3-currency';

class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  /**
   * Sets the price amount.
   * @param {Number} amount - The price amount.
   */
  set amount(amount) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a Number');
    }
    this._amount = amount;
  }

  get amount() {
    return this._amount;
  }

  /**
   * Sets the currency for the price.
   * @param {Currency} currency - The currency instance.
   */
  set currency(currency) {
    if (currency instanceof Currency) {
      this._currency = currency;
    } else {
      throw new TypeError('currency must be an instance of Currency');
    }
  }

  get currency() {
    return this._currency;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.displayFullCurrency()}`;
  }

  /**
   * Converts the price amount to a new amount based on a conversion rate.
   * @param {Number} amount - The price amount to be converted.
   * @param {Number} conversionRate - The conversion rate to apply.
   * @returns {Number} The converted price amount.
   */
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new TypeError('amount must be a number');
    }

    if (typeof conversionRate !== 'number') {
      throw new TypeError('conversionRate must be a number');
    }

    return amount * conversionRate;
  }
}

export default Pricing;
