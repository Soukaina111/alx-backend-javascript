// Define the HolbertonCourse class that can be exported
class HolbertonCourse {
  // The constructor initializes the name, length, and students properties of the HolbertonCourse instance
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  /**
   * Setter method for the name property
   * @param {String} name - The name of the Holberton course
   * @throws {TypeError} - If the name is not a string
   */
  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
  }

  /**
   * Getter method for the name property
   * @returns {String} - The name of the Holberton course
   */
  get name() {
    return this._name;
  }

  /**
   * Setter method for the length property
   * @param {Number} length - The length of the Holberton course in weeks
   * @throws {TypeError} - If the length is not a number
   */
  set length(length) {
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = length;
  }

  /**
   * Getter method for the length property
   * @returns {Number} - The length of the Holberton course in weeks
   */
  get length() {
    return this._length;
  }

  /**
   * Setter method for the students property
   * @param {Array} students - An array of students enrolled in the Holberton course
   * @throws {TypeError} - If the students argument is not an array
   */
  set students(students) {
    if (students instanceof Array) {
      this._students = students;
    } else {
      throw new TypeError('Students must be an Array');
    }
  }

  /**
   * Getter method for the students property
   * @returns {Array} - An array of students enrolled in the Holberton course
   */
  get students() {
    return this._students;
  }
}

// Export the HolbertonCourse class as the default export
export default HolbertonCourse;
