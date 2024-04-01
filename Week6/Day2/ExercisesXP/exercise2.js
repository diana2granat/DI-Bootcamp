// 🌟 Exercise 2 : Colors #2
// Instructions

// Using these arrays :

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];

//     Write a JavaScript program that displays the colors in the following order : “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…
//     Hint : Use the array methods taught in class and ternary operator.

function displayColors2(arr1, arr2) {
    arr1.forEach((color, index) => {
        const ending = index < 3 ? arr2[index + 1] : arr2[0];
        console.log(`#${index + 1}${ending} choice is ${color}.`);
    });
    return '========================'
}
console.log(displayColors2(colors, ordinal));
