function getDetails(name: string, age: number): [string, number, string] {
    let greetings: string = `Hello, ${name}!`;
    return [name, age, greetings];
}

// Test the function
let [personName, personAge, greetings] = getDetails("John", 30);
console.log("Name:", personName);       
console.log("Age:", personAge);        
console.log("Greeting:", greetings); 
