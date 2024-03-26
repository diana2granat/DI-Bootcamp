// 🌟 Exercise 5 : Users
// Instructions

// Create a new structured HTML file and a new Javascript file

// <div id="container">Users:</div>
// <ul class="list">
//     <li>John</li>
//     <li>Pete</li>
// </ul>
// <ul class="list">
//     <li>David</li>
//     <li>Sarah</li>
//     <li>Dan</li>
// </ul>

//     Add the code above, to your HTML file

//  1)   Using Javascript:
//         Retrieve the div and console.log it
//         Change the name “Pete” to “Richard”.
//         Delete the second <li> of the second <ul>.
//         Change the name of the first <li> of each <ul> to your name. (Hint : use a loop)

const containerDiv = document.getElementById("container");
console.log(containerDiv);

const peteElement = document.querySelector("ul.list:nth-of-type(1) li:nth-of-type(2)");
peteElement.textContent = "Richard";

const secondUl = document.querySelector("ul.list:nth-of-type(2)");
secondUl.removeChild(secondUl.children[1]);

const ulList = document.querySelectorAll("ul.list");
ulList.forEach(ul => {
    const firstLi = ul.querySelector("li");
    firstLi.textContent = "Diana";
});


//  2)   Using Javascript:
//         Add a class called student_list to both of the <ul>'s.
const ulElements = document.querySelectorAll("ul");
ulElements.forEach(ul => {
    ul.classList.add("student_list");
});
//  3)      Add the classes university and attendance to the first <ul>.
const firstUl = document.querySelector("ul:first-of-type");
firstUl.classList.add("university", "attendance");

//  4)   Using Javascript:
//         Add a “light blue” background color and some padding to the <div>.
containerDiv.style.backgroundColor = "lightblue";
containerDiv.style.padding = "15px";
//         Do not display the <li> that contains the text node “Dan”. (the last <li> of the first <ul>)
const danItem = document.querySelector("ul:last-of-type li:last-of-type");
danItem.style.display = "none";
//         Add a border to the <li> that contains the text node “Richard”. 
//          (the second <li> of the <ul>)
const richardListItem = document.querySelector("ul li:nth-of-type(2)");
richardListItem.style.border = "2px solid pink";
//         Change the font size of the whole body.
document.body.style.fontSize = "30px";