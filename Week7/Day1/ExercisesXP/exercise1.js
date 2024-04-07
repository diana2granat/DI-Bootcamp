// 🌟 Exercise 1 : Comparison
// Instructions

//     Create a function called compareToTen(num) that takes a number as an argument.
//     The function should return a Promise:
//         the promise resolves if the argument is less than or equal to 10
//         the promise rejects if argument is greater than 10.

function compareToTen(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (num <= 10) {
                resolve(`${num} is less than or equal to 10`);
            } else {
                reject(`${num} is greater than 10`);
            }
        }, 4000); 
    });
}
// Test:
//In the example, the promise should reject
compareToTen(15)
  .then(result => console.log(result))
  .catch(error => console.log('error =>',error))

//In the example, the promise should resolve
compareToTen(8)
  .then(result => console.log(result))
  .catch(error => console.log('error =>',error))
