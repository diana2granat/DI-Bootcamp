// 🌟 Exercise 4 : Building Management
// Instructions:

// 1) Copy and paste the above object to your JavaScript file
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

// //  2) Console.log the number of floors in the building.
// console.log("Number of floors:", building.numberOfFloors);
// //  3) Console.log how many apartments are on the floors 1 and 3.
//         // Access the number of apartments on floors 1 and 3
// const apartmentsOnFirstFloor = building.numberOfAptByFloor.firstFloor;
// const apartmentsOnThirdFloor = building.numberOfAptByFloor.thirdFloor;
//         // Console.log how many apartments are on the floors 1 and 3
// console.log("Number of apartments on the first floor:", apartmentsOnFirstFloor);
// console.log("Number of apartments on the third floor:", apartmentsOnThirdFloor);


// //  4) Console.log the name of the second tenant and the number of rooms he has in his apartment.
// const secondTenant = building.nameOfTenants[1];
// const secondTenantLowercase = secondTenant.toLowerCase();
// console.log("Name of the second tenant:", secondTenantLowercase);
// const roomsOfTenant = building.numberOfRoomsAndRent[secondTenantLowercase];
// console.log("Apartments:", roomsOfTenant);

//  5) Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.
        // Calculate the sum of Sarah's and David's rent
const sarahRent = building.numberOfRoomsAndRent["sarah"][1];
const davidRent = building.numberOfRoomsAndRent["david"][1];
const sumSarahDavidRent = sarahRent + davidRent;
        // Get Dan's rent
const danRent = building.numberOfRoomsAndRent["dan"][1];
        // Check if the sum of Sarah's and David's rent is bigger than Dan's rent
if (sumSarahDavidRent > danRent) {
         // Increase Dan's rent to 1200
    building.numberOfRoomsAndRent["dan"][1] = 1200;
    console.log("Dan's rent has been increased to 1200.");
} else {
    console.log("The sum of Sarah's and David's rent is not bigger than Dan's rent.");
}

