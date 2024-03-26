// Instructions

// In this exercise we will be creating a webpage with a black background as the universe and we will fill the universe with planets and their moons.
// We will provide the HTML page.
// You only have to work with a JS file.

//     Create an array which value is the planets of the solar system.
//     For each planet in the array, create a <div> using createElement. This div should have a class named "planet".
//     Each planet should have a different background color. (Hint: you could add a new class to each planet - each class containing a different background-color).
//     Finally append each div to the <section> in the HTML (presented below).


const listPlanetsSection = document.querySelector(".listPlanets");

const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Pluto'];
const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink', 'brown'];

// const backgroundColors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink', 'brown'];

planets.forEach((planetName, index) => {
    const planetDiv = document.createElement("div"); //creating div
    planetDiv.classList.add("planet"); //adding class
    planetDiv.style.backgroundColor = colors[index];
    //planetDiv.classList.add(`color-white`); // Use index to select background color
    planetDiv.textContent = planetName;
    listPlanetsSection.appendChild(planetDiv);
});
