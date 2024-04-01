// let b = 3, d = b, u = b;

// const tree = ++d * d*b * b++ +
//  + --d+ + +b-- +
//  + +d*b+ +
//  u

// console.log(tree); // 163

// 4 * 4 * 3 * 3 +
// 3 + 4 +
// 3 * 3 +
// 3

/** forEach */
// let users = ["John", "Mary", "Dan", "Anne"];

// users.forEach((item, i, arr) => {
//   console.log("item=>", item, i);
//   arr[i] = item + "@gmail.com";
// });
// // console.log(users);

// /** some */
// let result = users.some((item) => {
//   return item === "Dan";
// });
// console.log("result=>", result);

// /** every */
// let result2 = users.every((item) => {
//   return item !== "Da";
// });
// console.log("result2=>", result2);

/* Exercise
 * Create an function that get an array of Numbers as input
 * and return a new array with all numbers multiply by 2
 * For example:
 * Give this array [1,2,3,4]
 * result [2,4,6,8]
 */
// const numbers = [1, 2, 3, 4, 5, 6];

// function map(a) {
//   let arr = [];
//   for (let i = 0; i < a.length; i++) {
//     arr.push(a[i] * 2);
//   }
//   return arr;
//   //   a.forEach((num, i, arr) => {
//   //     arr[i] = num * 2;
//   //   });
//   //   return a;
// }
// console.log(map(numbers));

/** map */

// let arr = numbers.map((item) => {
//     return item;
// });
// console.log("arr=>", arr);

// let users = [
//   { userid: 1, name: "John", email: "jjj@gmail.com" },
//   { userid: 2, name: "Marry", email: "mmm@gmail.com" },
//   { userid: 3, name: "Anne", email: "aaa@gmail.com" },
//   { userid: 3, name: "Anne", email: "aaa@gmail.com" },
// ];

// function render(arr) {
//   let html = arr.map((item) => {
//     return `<div style="display:inline-block;">
//         <h2>${item.userid}</h2>
//         <h4>${item.name}</h4>
//         <p>${item.email}</p>
//         </div>`;
//   });
//   console.log(html);
//   document.getElementById('root').innerHTML = html.join('')
// }
// render(users)

/* Exercise
 * Create an function that get an array of Numbers as input
 * and return a new array with all numbers greater than 3
 * For example:
 * Give this array [0,1,1,2,3,5,8]
 * result [5,8]
 */

// function filter(arr) {
//   let newArr = [];
//   for (item of arr) {
//     if (item > 3) newArr.push(item);
//   }
//   return newArr;
// }

// console.log(filter([0,1,1,2,3,5,8]));

// let arr = [0,1,1,2,3,5,8]
// let newArr = arr.filter(item => {
//     return item > 3
// })

// console.log('newArr=>',newArr);

// const arr = [
//   { id: 1, name: "John", email: "jjj@gmail.com" },
//   { id: 2, name: "Mor", email: "mmm@gmail.com" },
//   { id: 3, name: "Marry", email: "marry@gmail.com" },
//   { id: 4, name: "Or", email: "or@gmail.com" },
// ];

// //   name include 'o'
// const newArr = arr.filter((item) => {
//   return (
//     item.name.toLowerCase().includes("r") &&
//     item.name.toLowerCase().includes("o")
//   );
// });
// console.log(newArr);

/**  Exercise
 * Create an function that get an array of Numbers as input
 * and return the sum of all numbers
 * For example:
 * Give this array [2, 5, 10,100]
 * result 117
 */

/** reduce */
// function reduce(arr, num = 0) {
//   let sum = num;
//   arr.forEach((item) => {
//     sum += item;
//   });
//   return sum;
// }
// console.log(reduce([2, 5, 10, 100], 100));
// let arr = [2, 5, 10, 100];
// let sum = arr.reduce((total, item) => total + item, 0);

// console.log("sum=>", sum);

/** find */
// const arr = [
//   { id: 1, name: "John", email: "jjj@gmail.com" },
//   { id: 2, name: "Mor", email: "mmm@gmail.com" },
//   { id: 3, name: "Marry", email: "marry@gmail.com" },
//   { id: 4, name: "Or", email: "or@gmail.com" },
// ];

// let user = arr.find((item) => {
//   return item.id === 5;
// });

// console.log(user);

/** findIndex */
// let indx = arr.findIndex((item) => item.id === 2);

// console.log(indx);

/** 
Birthday Cake Candles
This array are Birthday Cake Candles
You can blow only the tallest candles
let arr = [2,8,4,4,8,1,8]
birthdayCakeCandles function will return
how many candles you can blow

hint: how to find the max number in a givven array?
*/

// function birthdayCakeCandles(arr) {
//   let maxNum = Math.max(...arr);
//   return arr.filter((item) => item === maxNum).length;
// }
// console.log(birthdayCakeCandles([2, 8, 4, 4, 8, 9, 1, 8]));

/** destructuring */

// let arr = [1, 2, 3, 4, 5, 6];
// let a = arr[0];
// let b = arr[1];
// let c = arr[2];

// let [b, a, ...rest] = arr;
// console.log(b, a, rest);

// function x([...arr]){
//     console.log(arr);
// }
//

// let a = 10;
// let b = 20;

// let rest = [1, 2, 3];

// let.x = [a, b, ...rest];
// console.log(x);

// {...obj}
// [...arr]