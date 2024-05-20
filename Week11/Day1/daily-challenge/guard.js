function processInput(input) {
    if (typeof input === "number") {
        // number
        return input * input; // Return the square of the number
    }
    else if (typeof input === "string") {
        // string
        return input.toUpperCase(); // returning uppercase version of the string
    }
    else {
        // boolean
        return !input; // Return the negated value of the boolean
    }
}
// Test the function
console.log(processInput(5));
console.log(processInput("hello"));
console.log(processInput(true));
