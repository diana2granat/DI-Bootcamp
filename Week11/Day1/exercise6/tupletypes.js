function getDetails(name, age) {
    var greetings = "Hello, ".concat(name, "!");
    return [name, age, greetings];
}
// Test the function
var _a = getDetails("John", 30), personName = _a[0], personAge = _a[1], greetings = _a[2];
console.log("Name:", personName);
console.log("Age:", personAge);
console.log("Greeting:", greetings);
