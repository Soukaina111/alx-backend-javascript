// Define a Car class that can be exported
export default class Car {
  // The constructor initializes the properties of the Car instance
  constructor(brand, motor, color) {
    this.brand = brand;
    this.motor = motor;
    this.color = color;
  }

  // Getter and setter for the brand property
  get brand() {
    return this._brand;
  }

  set brand(value) {
    this._brand = value;
  }

  // Getter and setter for the motor property
  get motor() {
    return this._motor;
  }

  set motor(value) {
    this._motor = value;
  }

  // Getter and setter for the color property
  get color() {
    return this._color;
  }

  set color(value) {
    this._color = value;
  }

  // Define a static getter for the Symbol.species property
  // This allows the cloneCar method to create a new instance of the same class
  static get [Symbol.species]() {
    return this;
  }

  // Define a method to clone the current Car instance
  cloneCar() {
    // Get the constructor function of the current class
    const Species = this.constructor[Symbol.species];

    // Create a new instance of the current class using the constructor function
    return new Species();
  }
}
