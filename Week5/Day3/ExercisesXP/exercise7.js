// Exercise 7 : My Book List
// Instructions

// Take a look at this link for help.

// The point of this challenge is to display a list of two books on your browser.

//     In the body of the HTML page, create an empty section:
//     <section class="listBooks"></section>

//     In the js file, create an array called allBooks. This is an array of objects. Each object is a book that has 4 keys (ie. 4 properties) :
//         title,
//         author,
//         image : a url,
//         alreadyRead : which is a boolean (true or false).

//     Initiate the array with 2 books of your choice (ie. Add manually 2 books objects in the array)

const allBooks = [
    {
        title: "Holly",
        author: "Stephen King",
        image: "https://images.theconversation.com/files/551172/original/file-20230929-24-id0wxp.jpg?ixlib=rb-1.1.0&rect=0%2C7%2C2560%2C1429&q=45&auto=format&w=926&fit=clip/100",
        alreadyRead: true
    },
    {
        title: "It",
        author: "Stephen King",
        image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1334416842i/830502.jpg/100",
        alreadyRead: false
    }
];

//     Requirements : All the instructions below need to be coded in the js file:
//         Using the DOM, render each book inside a div (the div must be added to the <section> created in part 1).
//         For each book :
//             You have to display the book’s title and the book’s author.
//             Example: HarryPotter written by JKRolling.
//             The width of the image has to be set to 100px.
//             If the book is already read. Set the color of the book’s details to red.



// the section where books will be displayed
const listBooksSection = document.querySelector(".listBooks");

// Render each book inside a div and add it to the section
allBooks.forEach(book => {
    const bookDiv = document.createElement("div");
    bookDiv.innerHTML = `
        <p>Title: ${book.title}</p>
        <p>Author: ${book.author}</p>
        <img src="${book.image}" style="width: 100px;">
    `;
    // If the book is already read, set the color of details to red
    if (book.alreadyRead) {
        bookDiv.style.color = "red";
    }
    listBooksSection.appendChild(bookDiv);
});
