// Vehicle interface
interface Vehicle {
    make: string;
    model: string;
    start(): string;
}

// Car interface (extends Vehicle)
interface Car extends Vehicle {
    numberOfDoors: number;
}

class Sedan implements Car {
    make: string;
    model: string;
    numberOfDoors: number;

    constructor(make: string, model: string, numberOfDoors: number) {
        this.make = make;
        this.model = model;
        this.numberOfDoors = numberOfDoors;
    }

    start(): string {
        return `${this.make} ${this.model} is starting.`;
    }
}

// Example usage
const myCar = new Sedan("Toyota", "Celica", 4);
console.log(myCar.start()); 
console.log(`Make: ${myCar.make}, Model: ${myCar.model}, Number of Doors: ${myCar.numberOfDoors}`);

