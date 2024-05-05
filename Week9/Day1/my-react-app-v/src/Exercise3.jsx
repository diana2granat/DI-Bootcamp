// Exercise3===========================================================================================
import React, { Component } from 'react';
import './Exercise.css'; // Import the Exercise.css file

const style_header = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
};

class Exercise extends Component {
    render() {
        return (
          <div>
            {/* Create a <h1> tag with red text color and lightblue background color */}
            <h1 style={style_header}>This is a header</h1>
    
            {/* Create a paragraph */}
            <p className="para">This is a paragraph.</p>
    
            {/* Create a link */}
            <a href="https://example.com">This is a link</a>
    
            {/* Create a form */}
            <form>
              <label>
                Eneter your name:
                <p><input type="text" /></p>
              </label>
              <button type="submit">Submit</button>
            </form>
    
            {/* Create an image */}
            <img src="https://media.geeksforgeeks.org/wp-content/uploads/20230420093202/Internet-image-(2).webp" alt="Description of the image" />
    
            {/* Create a list */}
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
          </div>
        );
    }
}

export default Exercise;