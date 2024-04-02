// 🌟 Exercise 6 : Challenges

//   1)  Evaluate these (ie True or False)

    // [2] === [2] -  there arrays are distinct objects in memory - will be false
    // {} === {} -  these objects are distinct objects in memory- will be false


//   2)  What is, for each object below, the value of the property number and why?

    const object1 = { number: 5 }; 
    const object2 = object1; 
    const object3 = object2; 
    const object4 = { number: 5};

    object1.number = 4;
    console.log(object1.number)
    console.log(object2.number)
    console.log(object3.number)
    console.log(object4.number)

    //answer: 
    // object1 = 4
    // object2 = 4
    // object3 = 4
    // object4 = 5

    // 3a) Create a class Animal with the attributes name, type and color. The type is the animal type, for example: dog, cat, dolphin ect …

class Animal {
    constructor(name, type, color) {
        this.type = type;
        this.name = name;
        this.color = color;
    }
}

    // 3b) Create a class Mamal that extends from the Animal class. Inside the class, add a method called sound(). 
    // This method takes a parameter: the sound the animal makes, and returns the details of the animal (name, type and color) as well as the sound it makes.

class Mamal extends Animal {
    constructor(name, type, color) {
        super(name, type, color);
    }
    sound(sound) {
        this.sound = sound;
        return `${sound}, I'm a ${this.type} named ${this.name} and I'm ${this.color}`;
    }
}

    // 3c) Create a farmerCow object that is an instance of the class Mamal. 
    //     The object accepts a name, a type and a color and calls the sound method that “moos” her information.
    //     For example: Moooo I'm a cow, named Lily and I'm brown and white

const farmerCow = new Mamal("Lily", "cow", "brown and white");
console.log(farmerCow.sound("Moooo"));