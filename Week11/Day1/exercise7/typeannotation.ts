function createPerson(name: string, age: number): { name: string, age: number } {
    return { name: name, age: age };
}

let person = createPerson("John", 30);
console.log("Name:", person.name);  
console.log("Age:", person.age);   
