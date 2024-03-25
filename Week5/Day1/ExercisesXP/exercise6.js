// Exercise 6 : Rudolf
// Instructions

const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}

//     Given the object above and using a for loop, console.log “my name is Rudolf the raindeer”
  let output = '';
  
  // Iterate key-value pairs and combine them into a single string
  for (let key in details) {
      output += key + ' ' + details[key] + ' ';
  }
  
  console.log(output);
  