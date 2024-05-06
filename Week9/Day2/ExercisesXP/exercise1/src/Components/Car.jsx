import React, { useState } from "react";
import Garage from "./Garage";

const carinfo = { name: "Ford", model: "Mustang" };

const Car = () => {
  // State variable 'color' and its setter function 'setColor' using useState
  const [color, setColor] = useState("red"); // Default color is set to 'red'
  const size = "small";

  return (
    <div>
    <h1>This car is {color} {carinfo.name} {carinfo.model}</h1>
    <Garage size={size} />
    {/* Optional: Add a button to change the car's color */}
    <button onClick={() => setColor("blue")}>Change Color</button>
    </div>
  );
};

export default Car;
