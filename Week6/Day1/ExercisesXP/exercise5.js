// 🌟 Exercise 5 : Kg and grams
// Instructions

// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)

//     First, use function declaration and invoke it.
//     Then, use function expression and invoke it.
//     Write in a one line comment, the difference between function declaration and function expression.
//     Finally, use a one line arrow function and invoke it.


// Function Declaration - typing a function with its content inside the braces
function transToGram(a) {
    return a * 1000;
}

// Function Expression - declaring a constant which is the function
const transToGram = function(a) {
    return a * 1000;
};

// Arrow Function
const transToGram = (a) => a * 1000;
console.log(transToGram(3));