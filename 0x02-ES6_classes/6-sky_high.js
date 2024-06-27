import Building from './5-building';

/**
 * Represents a high-rise building with multiple floors.
 * Extends the `Building` class and adds the ability to track the number of floors.
 */
export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this.floors = floors;
  }

  /**
   * Gets the number of floors in the building.
   * @returns {number} The number of floors.
   */
  get floors() {
    return this._floors;
  }

  /**
   * Sets the number of floors in the building.
   * @param {number} value - The new number of floors.
   */
  set floors(value) {
    this._floors = value;
  }

  /**
   * Generates an evacuation warning message for the building.
   * The message includes the number of floors that need to be evacuated.
   * @returns {string} The evacuation warning message.
   */
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
