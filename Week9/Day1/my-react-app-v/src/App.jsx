import './App.css'
import React from 'react';

// Exercise1===========================================================================================
// function App() {
//   // Task 1: Display "Hello World!" message in a paragraph
//   const helloMessage = <p>Hello World!</p>;

//   // Task 2: Create a constant variable with JSX const myelement = <h1>I Love JSX!</h1>;, and render it on the page.
//   const myElement = <h1>I Love JSX!</h1>;

//   // Task 3: Create a constant variable named sum, which value is 5 + 5. Render on the page, the following sentence "React is <sum> times better with JSX"
//   const sum = 5 + 5;

//   return (
//     <div>
//       {/* Task 1 */}
//       {helloMessage}

//       {/* Task 2 */}
//       {myElement}

//       {/* Task 3 */}
//       <p>React is {sum} times better with JSX</p>
//     </div>
//   );
// }

// export default App;

// Exercise2===========================================================================================
// continuation also in UserFavouriteAnimals.jsx ======================================================

// import UserFavoriteAnimals from './UserFavoriteAnimals'; // Import the UserFavoriteAnimals component

// const user = {
//   firstName: 'Bob',
//   lastName: 'Dylan',
//   favAnimals: ['Horse', 'Turtle', 'Elephant', 'Monkey']
// };

// function App() {
//   return (
//     <div>
//       {/* Render the first name */}
//       <h3>{user.firstName}</h3>
//       {/* Render the last name */}
//       <h3>{user.lastName}</h3>
//       {/* Render the UserFavoriteAnimals component and pass the favAnimals array as props */}
//       <UserFavoriteAnimals favAnimals={user.favAnimals} />
//     </div>
//   );
// }

// export default App;

// Exercise3===========================================================================================
// the continuation in the Exercise3.jsx ===============================================================================

import Exercise from './Exercise3'; // Import the Exercise component from Exercise3.js

function App() {
  return (
    <div>
      {/* Display the Exercise component */}
      <Exercise />
    </div>
  );
}

export default App;
