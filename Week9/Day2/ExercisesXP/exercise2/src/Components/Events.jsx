import React, { useState } from "react";

const Events = () => {
    // Function to handle key down event
    const handleKeyDown = (event) => {
        // Check if Enter key is pressed (keyCode 13)
        if (event.keyCode === 13) {
            // Alert message with the input text value
            alert("You pressed Enter with text: " + event.target.value);
        }
    }
    // Arrow function clickMe that alerts 'I was clicked'
    const clickMe = () => {
        alert("I was clicked");
    };
    // State variable 'isToggleOn' and its setter function 'setIsToggleOn' using useState
    const [isToggleOn, setIsToggleOn] = useState(true);

    // Function to toggle the state variable 'isToggleOn'
    const toggleState = () => {
        setIsToggleOn(!isToggleOn); // Toggle the value of 'isToggleOn'
    };

    return (
    <div>
        {/* Button that calls the clickMe function on click */}
        <button onClick={clickMe}>Click me</button>
        {/* Input field with onKeyDown event handler */}
        <input type="text" onKeyDown={handleKeyDown} placeholder="Type something and press Enter" />
        {/* Button with onClick event that calls the 'toggleState' function and a title */}
        <h2 style={{ color: "blue" }}>Toggle Button</h2> {/* Title above the ON/OFF button */}
        <button onClick={toggleState} title={isToggleOn ? "Turn OFF" : "Turn ON"}>
            {isToggleOn ? "ON" : "OFF"}
        </button>
    </div>
    );
};

export default Events;
