function filterArray<T>(array: T[], predicate: (element: T) => boolean): T[] {
    return array.filter(predicate);
}

// Example usage
const numbers = [11, 12, 13, 14, 15];
const evenNumbers = filterArray(numbers, (num) => num % 2 === 0);
console.log(evenNumbers); 

const strings = ["jablko", "banan", "wisnia", "kiwi"];
const lengthStrings = filterArray(strings, (str) => str.length > 5);
console.log(lengthStrings); 
