// 🌟 Exercise 5 : Family
// Instructions

// Create an object called family with key-value pairs
const family = {
    father: "Ofer",
    mother: "Diana",
    son: "Rafael",
    daughter: "Natali"
};

// Using a for-in loop, console.log the keys of the object
console.log("Keys of the object:");
for (let key in family) {
    console.log(key);
}

// Using a for-in loop, console.log the values of the object
console.log("\nValues of the object:");
for (let key in family) {
    console.log(family[key]);
}

