import React, { useState, useEffect } from "react";

const Color = () => {
  // State variable favoriteColor with initial value "red"
  const [favoriteColor, setFavoriteColor] = useState("red");

  // useEffect hook to display an alert message after component is rendered
  useEffect(() => {
    alert("useEffect reached");
  }, []); // Empty dependency array ensures useEffect runs only once after initial render

  // Function to change the value of favoriteColor to "yellow" after clicking OK in the alert
//   useEffect(() => {
//     if (favoriteColor === "yellow") {
//       alert("Color changed to yellow");
//     }
//   }, [favoriteColor]); // useEffect runs whenever favoriteColor changes

//   const changeColor1 = () => {
//     setFavoriteColor("yellow");
//   };

  // Function to change the value of favoriteColor to "blue"
  const changeColor = () => {
    setFavoriteColor("blue");
  };

  return (
    <div>
      {/* Output the value of favoriteColor in a header tag */}
      <h1>Favorite Color: {favoriteColor}</h1>
      {/* Button to change the value of favoriteColor to "blue" */}
      <button onClick={changeColor}>Change Color to Blue</button>
    </div>
  );
};

export default Color;
