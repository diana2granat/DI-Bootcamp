function createPerson(name, age) {
    return { name: name, age: age };
}
var person = createPerson("John", 30);
console.log("Name:", person.name);
console.log("Age:", person.age);
