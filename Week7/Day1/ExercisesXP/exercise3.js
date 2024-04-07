// 🌟 Exercise 3 : Resolve & Reject
// Instructions

//     Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.
//     Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”

const promise1 = Promise.resolve(3);
const promise2 = Promise.reject("Boo!");

promise1
.then(result => {
    console.log(result); 
})
.catch(error => {
    console.error(error); 
});

promise2
.then(result => {
    console.log(result); 
})
.catch(error => {
    console.error(error); 
});