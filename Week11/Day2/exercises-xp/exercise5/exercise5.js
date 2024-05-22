function filterArray(array, predicate) {
    return array.filter(predicate);
}
// Example usage
var numbers = [11, 12, 13, 14, 15];
var evenNumbers = filterArray(numbers, function (num) { return num % 2 === 0; });
console.log(evenNumbers);
var strings = ["jablko", "banan", "wisnia", "kiwi"];
var lengthStrings = filterArray(strings, function (str) { return str.length > 5; });
console.log(lengthStrings);
