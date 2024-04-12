// In app.js, import the array of person objects from the data.js module.
// Write a function that calculates and prints the average age of all the persons in the array.
// Use the imported array and the average age function in app.js.
// Run app.js and confirm that the average age is correctly calculated and displayed.

const { persons } = require("./data");

function averageAge(arr){
    let ageSum = 0;
    arr.forEach(person => {
        ageSum += person.age; // Accumulate the age of each person
    });
    const averageAge = ageSum / arr.length;
    return averageAge;
}

console.log(averageAge(persons));