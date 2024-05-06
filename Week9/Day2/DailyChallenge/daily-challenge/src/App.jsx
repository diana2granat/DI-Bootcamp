import './App.css'
import React, { useState } from "react";

function App() {
  // Initialize state with languages and their initial votes
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaScript", votes: 0 },
    { name: "Java", votes: 0 }
  ]);

  // Function to increase the votes of a specific language
  const voteForLanguage = (index) => {
    // Create a copy of the languages array
    const updatedLanguages = [...languages];
    // Increment the votes of the selected language
    updatedLanguages[index].votes++;
    // Update the state with the new array
    setLanguages(updatedLanguages);
  };

  return (
    <div id="root">
      <h1>Vote for Your Favorite Language</h1>
      {/* Render buttons for each language */}
      {languages.map((language, index) => (
        <div key={index}>
          {/* Apply button styles */}
          <button className="button" onClick={() => voteForLanguage(index)}>
            {language.name} - Votes: {language.votes}
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;

