// 🌟 Exercise 5 : Star Wars
// Instructions

// Using this array const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

//     Use the reduce() method to combine all of these into a single string.

epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

const reduced = epic.reduce((total, item) => {
    return total + ' ' + item
});
console.log(reduced);

// function reduce(arr, num = 0) {
//   let sum = num;
//   arr.forEach((item) => {
//     sum += item;
//   });
//   return sum;
// }

