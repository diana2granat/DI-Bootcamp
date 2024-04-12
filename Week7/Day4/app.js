// const { multiply, sum } = require("./math");

// const result1 = multiply(3,4);
// const result2 = sum(3,4);

// console.log(result1);
// console.log(result2);

const fetchData = require('./api_fetch');

fetchData()
  .then(data => {
    console.log(data); // This will log the fetched data
    // You can perform further operations with the fetched data here
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });