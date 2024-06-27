class HolbertonCourse {
	/*defining the constructor of the class */
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  /*setter of name attribute */
  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
  }
  /*getter of name attribute */
  get name() {
    return this._name;
  }

  /*setter and getter of length attribute*/
  set length(length) {
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = length;
  }

  get length() {
    return this._length;
  }

  /**
   *setter and getter of students attribute
   */
  set students(students) {
    if (students instanceof Array) {
      this._students = students;
    } else {
      throw new TypeError('Students must be an Array');
    }
  }

  get students() {
    return this._students;
  }
}
 /*this one is to make it usalble for other codes*/ 
export default HolbertonCourse;
