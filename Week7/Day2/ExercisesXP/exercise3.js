// 🌟 Exercise 3 : Async function
// Instructions

// Improve the program below :

// fetch("https://www.swapi.tech/api/starships/9/")
//     .then(response => response.json())
//     .then(objectStarWars => console.log(objectStarWars.result));

//     Create an async function, that will await for the above GET request.
//     The program shouldn’t contain any then() method.
//     Make sure to check the status of the Response and to catch any occuring errors.


async function fetchData() {
    try {
        const response = await fetch("https://www.swapi.tech/api/starships/9/");
        if (!response.ok){
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data.result);
    }catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

fetchData();