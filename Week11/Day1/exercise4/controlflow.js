function checkNumber(num) {
    if (num > 0) {
        return "positive number";
    }
    else if (num < 0) {
        return "negative number";
    }
    else {
        return "zero";
    }
}
// Test cases
console.log(checkNumber(5));
console.log(checkNumber(-3));
console.log(checkNumber(0));
