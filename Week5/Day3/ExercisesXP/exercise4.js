// 🌟 Exercise 4 : Vacations Costs
// Instructions

// Let’s create functions that calculate your vacation’s costs:

//   1)  Define a function called hotelCost().
//         It should ask the user for the number of nights they would like to stay in the hotel.
//         If the user doesn’t answer or if the answer is not a number, ask again.
//         The hotel costs $140 per night. The function should return the total price of the hotel.

function hotelCost() {
    let nights;
    do {
        let input = prompt("Enter the number of nights you would like to stay in the hotel:");
        nights = parseInt(input);
    } while (isNaN(nights)); // Repeat if the input is not a number or is empty

    const pricePerNight = 140;
    const hotelCost1 = nights * pricePerNight;
    return hotelCost1;
}
// const totalHotelCost = hotelCost();
// console.log("Total hotel cost: $" + totalHotelCost);

//   2)  Define a function called planeRideCost().
//         It should ask the user for their destination.
//         If the user doesn’t answer or if the answer is not a string, ask again.
//         The function should return a different price depending on the location.
//             “London”: 183$
//             “Paris” : 220$
//             All other destination : 300$

function planeRideCost() {
    let destination;
    do {
        destination = prompt("Enter your destination: ");
    } while (!destination || typeof destination !== "string"); // Repeat if the input is empty or not a string

    let rideCost;
    if (destination === "London") {
        rideCost = 183;
    }
    else if (destination === "Paris") {
        rideCost = 220;
    }
    else{
        rideCost = 300;
    }
    return rideCost;
}
// const totalRideCost = planeRideCost();
// console.log("Plane ride cost: $" + totalRideCost);



//   3)  Define a function called rentalCarCost().
//         It should ask the user for the number of days they would like to rent the car.
//         If the user doesn’t answer or if the answer is not a number, ask again.
//         Calculate the cost to rent the car. The car costs $40 everyday.
//             If the user rents a car for more than 10 days, they get a 5% discount.
//         The function should return the total price of the car rental.

function rentalCarCost() {
    let days;
    do {
        input = prompt("For how many days you would like to rent: ");
        days = parseInt(input);
    } while (isNaN(days) || !days); // Repeat if the input is empty or not a number

    let carCost;
    if (days > 10){
        carCost = (days * 40) * 0.95;
    }
    else{
        carCost = days * 40;
    }
    return carCost;   
}
// const totalCarCost = rentalCarCost();
// console.log("Total cost: $" + totaCarCost);


//     Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
//     Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
//     Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the function totalVacationCost().
//     Call the function totalVacationCost()

function totalVacationCost() {
    const hotelCost1 = hotelCost();
    const rideCost = planeRideCost();
    const carCost = rentalCarCost();
    const vacationCost = rideCost + carCost + hotelCost1;
    return { hotelCost: hotelCost1, rideCost, carCost, vacationCost };
}

const totalCost = totalVacationCost();
console.log("Total vacation cost: $" + totalCost.vacationCost);
console.log("Hotel cost: $" + totalCost.hotelCost);
console.log("Plane ride cost: $" + totalCost.rideCost);
console.log("Car rental cost: $" + totalCost.carCost);