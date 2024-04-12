// Create a file “Hello World.txt” containing the sentence “Hello World !! “
// Create a file “Bye World.txt” containing the sentence “Bye World !! “
// Create another file named app.js.
// In app.js, import the functions from the fileManager.js module.
// Use the imported functions to read the content of the “Hello World.txt” text file and then write to the “Bye World.txt” with the content “Writing to the file”.
// Run app.js and verify that the file reading and writing operations are successful.

const { writeFile, readFile } = require("./fileManager");

//calling the reading function
readFile('helloworld.txt');


const content = 'I am fine';
//calling the writing function
writeFile('byeworld.txt', content, (err) => {
    if (err) {
        console.error('Error writing to file:', err);
        return;
    }
    console.log('You can see the answer in byeworld.txt file.');
});