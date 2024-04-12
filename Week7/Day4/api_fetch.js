const URL = 'https://jsonplaceholder.typicode.com/users'

const fetchData = () => {
    return fetch(URL)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  };
  
  module.exports = fetchData;
