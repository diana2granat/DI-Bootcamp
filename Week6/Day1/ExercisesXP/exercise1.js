// 🌟 Exercise 1 : Scope
// Instructions

//     Analyse the code below, and predict what will be the value of a in all the following functions.
//     Write your prediction as comments in a js file. Explain your predictions.

// // #1
// function funcOne() {
//     let a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(`inside the funcOne function ${a}`);
// }

// // #1.1 - run in the console:
// funcOne()
// // #1.2 What will happen if the variable is declared 
// // with const instead of let ?
// //answer: error, because you're trying to reassign a constant variable 'a'

// //#2
// const a = 0;
// function funcTwo() {
//     a = 5;
// }

// function funcThree() {
//     alert(`inside the funcThree function ${a}`);
// }

// // #2.1 - run in the console:
// funcThree()
// funcTwo()
// funcThree()
// // #2.2 What will happen if the variable is declared 
// // with const instead of let ?
// //answer: before the change the alert with value 0 will be shown, and then an alert with number 5. 
// //When let will be replaced by const, then we will encounter the error AFTER 1st alert shown.


// //#3
// function funcFour() {
//     window.a = "hello";
// }


// function funcFive() {
//     alert(`inside the funcFive function ${a}`);
// }

// // #3.1 - run in the console:
// funcFour()
// funcFive()
// //answer: the alert with the string "Hello" will be shown

// //#4
// let a = 1;
// function funcSix() {
//     let a = "test";
//     alert(`inside the funcSix function ${a}`);
// }


// // #4.1 - run in the console:
// funcSix()
// // #4.2 What will happen if the variable is declared 
// // with const instead of let ?
// //answer: in the beginning it will print 'test' in the alert. When I change let to const, the results will not change.

//#5
let a = 2;
if (true) {
    let a = 5;
    alert(`in the if block ${a}`);
}
alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console
// #5.2 What will happen if the variable is declared 
// with const instead of let ?
//answer: in the begining alert will print 5 and then 2. After the change it will show the same results.