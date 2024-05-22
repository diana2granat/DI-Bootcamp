var Person = /** @class */ (function () {
    // Constructor to initialize the properties
    function Person(firstName, lastName, age, address) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.address = address;
    }
    // Method to get the full name
    Person.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return Person;
}());
// Example usage
var person = new Person("Diana", "Granat", 36, "Street 10");
console.log(person.getFullName());
console.log(person.age);
console.log(person.firstName);  //error: Property 'firstName' is private and only accessible within class 'Person'.
console.log(person.address);  //error: Property 'address' is protected and only accessible within class 'Person' and its subclasses.
