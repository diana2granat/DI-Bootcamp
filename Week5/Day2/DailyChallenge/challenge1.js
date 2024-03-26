// 1) Create a variable called sentence. The value of the variable should be a string that contains the words “not” and “bad”.
//    For example, “The movie is not that bad, I like it”.
const sentence = "This dinner is not that bad ! You cook well";

// 2) Create a variable called wordNot where it’s value is the first appearance (ie. the position) 
//    of the substring “not” (from the sentence variable).
const wordNot = sentence.indexOf("not");
console.log("Position of the first appearance of 'not':", wordNot);

// 3) Create a variable called wordBad where it’s value is the first appearance (ie. the position) 
//    of the substring “bad” (from the sentence variable).
const wordBad = sentence.indexOf("bad");
console.log("Position of the first appearance of 'bad':", wordBad);

// 4) If the word “bad” comes after the word “not”, 
//    you should replace the whole “not…bad” substring with “good”, then console.log the result. 
if (wordNot !== -1 && wordBad !== -1 && wordBad > wordNot) {
    // Replace the "not...bad" substring with "good"
    const modifiedSentence = sentence.slice(0, wordNot) + "good" + sentence.slice(wordBad + 3);

    console.log("Modified sentence:", modifiedSentence);
} else {
    console.log("The word 'bad' does not come after the word 'not' in the sentence.");
}

// 5) If the word “bad” does not come after “not” or the words are not in the sentence, 
//    console.log the original sentence.
if (wordNot !== -1 && wordBad !== -1 && wordBad > wordNot) {
    // Replace the "not...bad" substring with "good"
    const modifiedSentence = sentence.slice(0, wordNot) + "good" + sentence.slice(wordBad + 3);

    console.log("Modified sentence:", modifiedSentence);
} else {
    console.log("The word 'bad' does not come after the word 'not' in the sentence.");
    console.log("Original sentence:", sentence);
}