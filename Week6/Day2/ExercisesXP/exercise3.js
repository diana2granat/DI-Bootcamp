// Exercise 3 : Analyzing
// Instructions

//     Analyze these pieces of code before executing them. What will be the outputs ?

// ------1------
// const fruits = ["apple", "orange"];
// const vegetables = ["carrot", "potato"];

// const result = ['bread', ...vegetables, 'chicken', ...fruits];
// console.log(result);
//output: a new array 'results' where the items of 'fruits' and 'vegetables' arrays will be included


// ------2------
// const country = "USA";
// console.log([...country]);
//output: an array of letters 'U' 'S' 'A'

// ------Bonus------
let newArray = [...[,,]];
console.log(newArray);
//output: the array of 2 undefined items