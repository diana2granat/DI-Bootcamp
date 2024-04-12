// 🌟 Exercise 2: Advanced Module Usage using ES6 module syntax
// Instructions

// Create a file named data.js.
// Inside data.js, define an array of objects, each representing a person with properties like name, age, and location.
// Export the array using the ES6 module syntax.
// Create another file named app.js.
// In app.js, import the array of person objects from the data.js module.
// Write a function that calculates and prints the average age of all the persons in the array.
// Use the imported array and the average age function in app.js.
// Run app.js and confirm that the average age is correctly calculated and displayed.

const persons = [
    {
      name: 'John',
      age: 29,
      location: 'New York'
    },
    {
      name: 'Alice',
      age: 35,
      location: 'Los Angeles'
    },
    {
      name: 'Bob',
      age: 42,
      location: 'Chicago'
    },
    {
      name: 'Emily',
      age: 26,
      location: 'San Francisco'
    },
    {
      name: 'Michael',
      age: 45,
      location: 'Seattle'
    }
];

module.exports = { persons };