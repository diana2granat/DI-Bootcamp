function greet(name) {
    if (name) {
        return "Hello, ".concat(name, "!");
    }
    else {
        return "Hello, someone!";
    }
}
// Test the function
console.log(greet());
console.log(greet("John"));
