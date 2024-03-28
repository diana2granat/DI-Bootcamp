// 🌟 Exercise 3 : Transform the sentence
// Instructions
// Add this sentence to your HTML file then follow the steps :

// <p><strong>Hello</strong> I hope you are enjoying <strong>this</strong> class. At the
// <strong>end</strong> you <strong>will</strong> be great Developers!
// <strong>Enjoy</strong> the <strong>JavaScript </strong> lessons</p>


// In the JS file:
//     1) Declare a global variable named allBoldItems.
let allBoldItems;

//     2) Create a function called getBoldItems() that takes no parameter. 
//        This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.
function getBoldItems() {
    allBoldItems = document.querySelectorAll('strong');
}
//     3) Create a function called highlight() that changes the color of all the bold text to blue.
function highlight() {
    allBoldItems.forEach(item => {
        item.classList.add('blue');
    });
}

//     4) Create a function called returnItemsToDefault() that changes the color of all the bold text back to black.
function returnItemsToDefault() {
    allBoldItems.forEach(item => {
        item.classList.remove('blue');
    });
}
//     5) Call the function highlight() on mouseover (ie. when the mouse pointer is moved onto the paragraph), 
//        and the function returnItemsToDefault() on mouseout (ie. when the mouse pointer is moved out of the paragraph). 
document.addEventListener('DOMContentLoaded', function() {
    getBoldItems(); // Call getBoldItems() to collect all bold items when the page loads
    
    const paragraph = document.querySelector('p');
    paragraph.addEventListener('mouseover', highlight);
    paragraph.addEventListener('mouseout', returnItemsToDefault);
});