// 🌟 Exercise 6 : Change the navbar
// Instructions

// Create a new structured HTML file and a new Javascript file

// <div id="navBar">
//     <ul>
//         <li><a href="#">Profile</a></li>
//         <li><a href="#">Home</a></li>
//         <li><a href="#">My Friends</a></li>
//         <li><a href="#">Messenger</a></li>
//         <li><a href="#">My Pics</a></li>
//     </ul>
// </div>

//  1)   Add the code above, to your HTML file

//  2)   Using Javascript, in the <div>, 
//       change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.
const navBarDiv = document.getElementById("navBar");
navBarDiv.setAttribute("id", "socialNetworkNavigation");

//  3)   We are going to add a new <li> to the <ul>.
//         First, create a new <li> tag (use the createElement method).
const newListItem = document.createElement("li");
//         Create a new text node with “Logout” as its specified text.
const textNode = document.createTextNode("Logout");
//         Append the text node to the newly created list node (<li>).
newListItem.appendChild(textNode);
//         Finally, append this updated list node to the unordered list (<ul>), 
//         using the appendChild method.
const ulElement = navBarDiv.querySelector("ul");
ulElement.appendChild(newListItem);


//  4)   Use the firstElementChild and the lastElementChild properties to retrieve 
//     the first and last <li> elements from their parent element (<ul>). 
//     Display the text of each link. (Hint: use the textContent property).
const firstLi = ulElement.firstElementChild;
const lastLi = ulElement.lastElementChild;
console.log("Text of the first link:", firstLi.textContent);
console.log("Text of the last link:", lastLi.textContent);

