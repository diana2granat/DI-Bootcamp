const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`


//   Create three functions. The two first functions should return a promise..

//   The first function is named toJs():
//       this function converts the morse json string provided above to a morse javascript object.
//       if the morse javascript object is empty, throw an error (use reject)
//       else return the morse javascript object (use resolve)

function toJs(json){
    const theObject = JSON.parse(json);
    return new Promise((resolve, reject) => {
        if (Object.keys(theObject).length === 0){
            reject("The object is empty");
        }else{
            resolve(theObject);
        }
    });
}

//   The second function called toMorse(morseJS), takes one argument: the new morse javascript object.
//       This function asks the user for a word or a sentence.
//       if the user entered a character that doesn’t exist in the new morse javascript object, throw an error. (use reject)
//       else return an array with the morse translation of the user’s word.
//       if the user enters the word "Hello", the promise resolves with this value ["....", ".", ".-..", ".-..","---"]
//       if the user entered the word "¡Hola!", the promise rejects because the character "¡" doesn't exist in the morse javascript object

function toMorse(morseJS){
    const userInput = prompt("Please enter a word or sentence:").split(" ").join("");
    const morseTranslation = [];
    return new Promise((resolve, reject) => {
        for (const char of userInput) {
            if (!morseJS.hasOwnProperty(char)) {
                reject("The object doesn't contain some letters from your words");
                return;
            }
            else{
                morseTranslation.push(morseJS[char])
            }
        }
        resolve(morseTranslation);
    });
}




//   The third function called joinWords(morseTranslation), takes one argument: the morse translation array
//       this function joins the morse translation by using line break and display it on the page (ie. On the DOM)

//   Chain the three functions.

// Example:
// "Hello" gives you
// ....
// .
// .-..
// .-..
// ---

function joinWords(arr){
    const morseDisplay = arr.join(" ");
    const contentElement = document.getElementById("content");
    const paragraphElement = document.createElement("p");
    paragraphElement.textContent = morseDisplay;
    contentElement.appendChild(paragraphElement);
}

toJs(morse)
    .then(morseJS => {
        return toMorse(morseJS);
    })
    .then(morseTranslation => {
        console.log("Morse Translation:", morseTranslation);
        joinWords(morseTranslation);
    })
    .catch(error => {
        console.error(error);
    });