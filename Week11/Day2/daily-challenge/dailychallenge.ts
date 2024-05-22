function validateUnionType(value: any, allowedTypes: string[]): boolean {
    const valueType = typeof value;
    return allowedTypes.indexOf(valueType) !== -1;
}

// Example usage
const allowedTypes = ["string", "number", "boolean"];

const test1 = validateUnionType("lalka Zuzia", allowedTypes); 
const test2 = validateUnionType(36, allowedTypes); 
const test3 = validateUnionType(true, allowedTypes); 
const test4 = validateUnionType({ name: "Diana" }, allowedTypes); 
const test5 = validateUnionType([11, 12, 13], allowedTypes); 

console.log(test1); 
console.log(test2); 
console.log(test3); 
console.log(test4); 
console.log(test5); 
