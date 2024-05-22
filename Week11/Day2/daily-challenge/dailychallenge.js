function validateUnionType(value, allowedTypes) {
    var valueType = typeof value;
    return allowedTypes.indexOf(valueType) !== -1;
}
// Example usage
var allowedTypes = ["string", "number", "boolean"];
var test1 = validateUnionType("lalka Zuzia", allowedTypes);
var test2 = validateUnionType(36, allowedTypes);
var test3 = validateUnionType(true, allowedTypes);
var test4 = validateUnionType({ name: "Diana" }, allowedTypes);
var test5 = validateUnionType([11, 12, 13], allowedTypes);
console.log(test1);
console.log(test2);
console.log(test3);
console.log(test4);
console.log(test5);
