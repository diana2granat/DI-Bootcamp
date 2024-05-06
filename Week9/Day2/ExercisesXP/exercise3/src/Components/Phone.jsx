import React, { useState } from "react";

const Phone = () => {
  // State variables using useState
  const [brand, setBrand] = useState("Samsung");
  const [model, setModel] = useState("Galaxy S20");
  const [color, setColor] = useState("black");
  const [year, setYear] = useState(2020);

  // Function to change the color state variable to 'blue'
  const changeColor = () => {
    setColor("blue");
  }

  return (
    <div>
      <h2>My phone is:</h2>
      <p>It's a {color} {brand} {model} from {year}</p>
      {/* Button to call the changeColor function */}
      <button onClick={changeColor}>Change Color to Blue</button>
    </div>
  );
};

export default Phone;
