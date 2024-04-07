Object Literals, Constructor Function & Class syntax ES6
/** Object Literals:
 * The most straightforward way to create an object is by using object literals, which define
 * object's properties and methods in the comma-separated list enclosed in curly braces.
 */
let personLiteral = {
  firstName: "John",
  lastName: "Due",
  greet: function () {
    return "Hello, " + this.firstName + " " + this.lastName;
  },
};

/** Constructor Function:
 * Constructor function can be used to create multiple instances  of an object
 * with the new keyword. inside the constructor function,
 * properties and methods can be assigned to the this keyword
 */

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.greet = function () {
    return "Hello, " + this.firstName + " " + this.lastName;
  };
}

let person1 = new Person("John", "Due");
let person2 = new Person("Jane", "Smith");

/** Class Syntax ES6
 * With the introduction of ES6, JavaScript supports class syntax for defining objects using
 * the class keyword. This provides a more familiar and structured way to
 * create objects and define their properties and methods
 */

class PersonES6 {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  greet() {
    return "Hello, " + this.firstName + " " + this.lastName;
  }
}

let personES6 = new PersonES6("John", "Due");