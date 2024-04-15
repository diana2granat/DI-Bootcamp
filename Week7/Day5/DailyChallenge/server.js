const express = require('express');
// const cors = require('cors');
// const { emojis } = require("./emojis/emojis.js");

const app = express();

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});


// let score = 0;
// app.use(cors());
// app.use(express.static(__dirname + "/public"));
// // Route to generate a random emoji question
// app.get("/emoji-question", (req, res) => {
//   function generateQuestion() {
//     const randomIndex = Math.floor(Math.random() * emojis.length);
//     const correctEmoji = emojis[randomIndex];

//     // Generate distractors by choosing random emojis from the array
//     const distractors = [];
//     while (distractors.length < 3) {
//       const randomIndex = Math.floor(Math.random() * emojis.length);
//       const emoji = emojis[randomIndex];
//       if (emoji !== correctEmoji && !distractors.includes(emoji)) {
//         distractors.push(emoji);
//       }
//     }

//     // Combine correct emoji and distractors, shuffle the options
//     const options = [correctEmoji, ...distractors];
//     options.sort(() => Math.random() - 0.5);

//     // Return the correct emoji and options
//     return { correctEmoji, options };
//   }

//   // Generate the question
//   const { correctEmoji, options } = generateQuestion();

//   // Send the question as JSON response
//   res.json({ question: correctEmoji, options });
// });







  