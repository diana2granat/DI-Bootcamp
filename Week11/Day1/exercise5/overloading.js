function add(x, y) {
    if (typeof x === "number" && typeof y === "number") {
        return x + y; // two numbers
    }
    else if (typeof x === "string" && typeof y === "string") {
        return x + y; // two strings
    }
    else {
        throw new Error("Error");
    }
}
// Test cases
console.log(add(5, 3));
console.log(add("Hello, ", "World!"));
