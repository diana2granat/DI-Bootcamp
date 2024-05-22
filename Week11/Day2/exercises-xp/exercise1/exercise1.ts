class Person {
    // Private properties
    private firstName: string;
    private lastName: string;

    // Public property
    public age: number;

    // Protected property
    protected address: string;

    // Constructor to initialize the properties
    constructor(firstName: string, lastName: string, age: number, address: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.address = address;
    }

    // Method to get the full name
    public getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

// Example usage
const person = new Person("Diana", "Granat", 36, "Street 10");
console.log(person.getFullName()); 
console.log(person.age); 
console.log(person.firstName);  //error: Property 'firstName' is private and only accessible within class 'Person'.
console.log(person.address);  //error: Property 'address' is protected and only accessible within class 'Person' and its subclasses.