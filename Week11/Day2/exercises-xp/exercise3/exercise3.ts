function combineObjects<T, U>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
}

// Example usage
const obj1 = { name: "Diana", age: 36 };
const obj2 = { job: "Engineer", city: "Tel Aviv" };

const combinedObj = combineObjects(obj1, obj2);
console.log(combinedObj);
