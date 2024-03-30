// Define the color squares as a constant
const colorSquares = document.querySelectorAll('.colorsquare');

// Function to get the color of the clicked color square
function getColorSquareClick(event) {
    const color = event.target.style.backgroundColor;
    selectedColor = color;
}

// Function to handle square click
function putColorSquareClick(event) {
    event.target.style.backgroundColor = selectedColor;
}

// Function to reset all squares to black
function resetSquares() {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.style.backgroundColor = '#000';
    });
}

// Attach click event listener to each color square
colorSquares.forEach(square => {
    square.addEventListener('click', getColorSquareClick);
});

// Attach click event listener to each small square
const squares = document.querySelectorAll('.square');
squares.forEach(square => {
    square.addEventListener('click', putColorSquareClick);
});

// Get the reset button
const resetButton = document.querySelector('#resetButton');

// Attach click event listener to the reset button
resetButton.addEventListener('click', resetSquares);


// Function to handle continuous coloring when mouse is down
function handleContinuousColoring(event) {
    if (event.target.classList.contains('square') && mouseDown) {
        event.target.style.backgroundColor = selectedColor;
    }
}

// Flag to track whether mouse is down
let mouseDown = false;
// Add mouse down event listener to the document
document.addEventListener('mousedown', function() {
    mouseDown = true;
});
// Add mouse up event listener to the document
document.addEventListener('mouseup', function() {
    mouseDown = false;
});
// Add mouse move event listener to the document for continuous coloring
document.addEventListener('mousemove', handleContinuousColoring);