// 🌟 Exercise 3 : Repeat the question
// Instructions

//     Prompt the user for a number.
let number = prompt("Please enter a number:");

//     Hint : Check the data type you receive from the prompt (ie. Use the typeof method)
// (Check if the input is a number)
while (isNaN(number)) {
    number = prompt("Invalid input. Please enter a valid number:");
}
// Convert the input to a number
number = Number(number);

//     While the number is smaller than 10 continue asking the user for a new number.
while (number < 10) {
    number = prompt("Number is smaller than 10. Please enter a new number:");
    // (Check if the input is a number)
    while (isNaN(number)) {
    number = prompt("Invalid input. Please enter a valid number:");
    }
    // (Convert the input to a number)
    number = Number(number);
    }

console.log("Number is greater than or equal to 10.");
//     Tip : Which while loop is more relevant for this situation?


