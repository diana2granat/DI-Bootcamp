// Create another file named read-directory.js.
// In read-directory.js, use the fs module to read the list of files in a specified directory 
// and display their names in the terminal.

const fs = require('fs');


const thePath = 'C:/Users/diana/Desktop/DI-Bootcamp/Week7/Day4/ExercisesXP/exercise7/file-explorer';
// Reading the list of files
fs.readdir(thePath, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }
  // Displaying the names of the files
  console.log('Files:');
  files.forEach((file, index) => {
    console.log(`${index + 1}. ${file}`);
  });
});
