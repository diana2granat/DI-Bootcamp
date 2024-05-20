// TypeScript Type Assertions Example with HTML

// Retrieve the input element from the DOM
let myInputElement = document.getElementById("myInput") as HTMLInputElement;

// Set the value of the input element
myInputElement.value = "Hello, Diana!";

// Retrieve the button element from the DOM
let myButtonElement = document.getElementById("myButton") as HTMLButtonElement;

// Add event listener to the button
myButtonElement.addEventListener("click", function() {
    alert("Button Clicked!");
});
