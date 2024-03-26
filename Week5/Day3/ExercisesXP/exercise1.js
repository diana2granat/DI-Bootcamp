// 🌟 Exercise 1 : Find the numbers divisible by 23
// Instructions

//     Create a function call displayNumbersDivisible() that takes no parameter.
//     In the function, loop through numbers 0 to 500.
//     Console.log all the numbers divisible by 23.
//     At the end, console.log the sum of all numbers that are divisible by 23.
//     Outcome : 0 23 46 69 92 115 138 161 184 207 230 253 276 299 322 345 
//     368 391 414 437 460 483
//     Sum : 5313

let sum = 0;
function displayNumbersDivisible() {
    for (let i = 0; i <= 500; i++) {
        let result = i % 23;
        if (result === 0) {
            console.log(i);
            sum += i;
        }
    }
    console.log("Sum:", sum);
}
displayNumbersDivisible();



