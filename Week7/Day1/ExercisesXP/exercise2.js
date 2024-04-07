// 🌟 Exercise 2 : Promises
// Instructions

//     Create a promise that resolves itself in 4 seconds and returns a “success” string.

const aPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('success');
        return resolve;
    }, 4000); 
});

aPromise
.then(result => {
    console.log(result); 
})
// .catch(error => {
//     console.error(error); 
// });