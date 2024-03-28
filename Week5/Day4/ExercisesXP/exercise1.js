//🌟 Exercise 1 : Change the article
// Copy the code below, into a structured HTML file:
// <article>
//     <h1> Some Facts </h1>
//     <h2> The Chocolate </h2>
//     <h3> History of the chocolate </h3>
//     <p> Chocolate is made from tropical Theobroma cacao tree seeds. 
//     Its earliest use dates back to the Olmec civilization in Mesoamerica.</p>
//     <p> After the European discovery of the Americas, chocolate became 
//     very popular in the wider world, and its demand exploded. </p>
//     <p> Chocolate has since become a popular food product that millions enjoy every day, 
//     thanks to its unique, rich, and sweet taste.</p> 
//     <p> But what effect does eating chocolate have on our health?</p> 
// </article>

//   1)   Using a DOM property, retrieve the h1 and console.log it.
// const h1Element = document.querySelector('h1');
// console.log(h1Element);

//   2)   Using DOM methods, remove the last paragraph in the <article> tag.
// const lastParagraph = document.querySelector('article p:last-child');
// lastParagraph.parentNode.removeChild(lastParagraph);

//   3)   Add a event listener which will change the background color of the h2 to red, when it’s clicked on.
// const h2Element = document.querySelector('h2');
// h2Element.addEventListener('click', function() {
//     h2Element.style.backgroundColor = 'red';
// });

//   4) Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).
// const h3Element = document.querySelector('h3');
// h3Element.addEventListener('click', function() {
//     h3Element.style.display = 'none';
// });

//   5) Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
// const boldButton = document.getElementById('boldButton');
// const allParagraphsElements = document.querySelectorAll('p');

// boldButton.addEventListener('click', function() {
//     allParagraphsElements.forEach(paragraph => {
//         paragraph.style.fontWeight = 'bold';
//     });
// });
