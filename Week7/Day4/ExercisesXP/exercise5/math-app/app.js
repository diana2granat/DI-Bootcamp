const _ = require('lodash');
const { multiply, sum } = require("./math");

// Example usage:
const num1 = 5;
const num2 = 3;

// Use the sum function from the math module
const sumResult = sum(num1, num2);
console.log('Sum:', sumResult);

// Use the multiply function from the math module
const multiplyResult = multiply(num1, num2);
console.log('Multiplied:', multiplyResult);
