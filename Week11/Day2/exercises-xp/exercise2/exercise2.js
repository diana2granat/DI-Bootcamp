var Sedan = /** @class */ (function () {
    function Sedan(make, model, numberOfDoors) {
        this.make = make;
        this.model = model;
        this.numberOfDoors = numberOfDoors;
    }
    Sedan.prototype.start = function () {
        return "".concat(this.make, " ").concat(this.model, " is starting.");
    };
    return Sedan;
}());
// Example usage
var myCar = new Sedan("Toyota", "Celica", 4);
console.log(myCar.start());
console.log("Make: ".concat(myCar.make, ", Model: ").concat(myCar.model, ", Number of Doors: ").concat(myCar.numberOfDoors));
