// # 🌟 Exercise 1 : List of people
// # Instructions
const people = ["Greg", "Mary", "Devon", "James"];

// # Part I - Review about arrays

// #     Write code to remove “Greg” from the people array.
const gregIndex = people.indexOf("Greg");
if (gregIndex !== -1) {
    people.splice(gregIndex, 1);
}
console.log(people)

// #     Write code to replace “James” to “Jason”.
const jamesIndex = people.indexOf("James");
if (jamesIndex !== -1) {
    people[jamesIndex] = "Jason";
}
console.log(people)

// #     Write code to add your name to the end of the people array.
const yourName = "Diana";
people.push(yourName);
console.log(people)

// #     Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
console.log(people)
const maryIndex = people.indexOf("Mary");
console.log("Mary's index:", maryIndex);

// #     Write code to make a copy of the people array using the slice method.
// #         The copy should NOT include “Mary” or your name.
// #         Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"];
// #         Hint: Check out the documentation for the slice method
const peopleCopy = people.slice(1, 3); // Start at index 1 (inclusive) and end at index 3 (exclusive)
console.log(peopleCopy);

// #     Write code that gives the index of “Foo”. Why does it return -1 ?
const fooIndex = people.indexOf("Foo");
console.log("Index of 'Foo':", fooIndex); //Since "Foo" is not in the array, it will return -1.

// #     Create a variable called last which value is the last element of the array.
// #     Hint: What is the relationship between the index of the last element in the array and the length of the array?
const last = people[people.length - 1];
console.log("Last element:", last); // Output: "Last element: Diana"



// # Part II - Loops
// #     Using a loop, iterate through the people array and console.log each person.
console.log("All people:");
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
}
// #     Using a loop, iterate through the people array and exit the loop after you console.log “Devon” .
// #     Hint: take a look at the break statement in the lesson.
console.log("\nExit after 'Devon':");
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (people[i] === "Devon") {
        break; // Exit the loop when "Devon" is encountered
    }
}
