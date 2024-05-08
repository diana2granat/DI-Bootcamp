// import React, { Component } from 'react';

// class ColorChanger extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       favoriteColor: 'red'
//     };
//   }

//   shouldComponentUpdate(nextProps, nextState) {
//     // Always return true to allow component to update
//     return true;
//   }

//   changeColor = () => {
//     this.setState({ favoriteColor: 'blue' });
//   };

//   render() {
//     return (
//       <div>
//         <h1>My favorite color is {this.state.favoriteColor}</h1>
//         <button onClick={this.changeColor}>Change Color</button>
//       </div>
//     );
//   }
// }

// export default ColorChanger;
import React, { Component } from 'react';

class ColorChanger extends Component {
    constructor(props) {
    super(props);
    this.state = {
        favoriteColor: '', // Initialize with an empty string
        show: true // Add a new property named 'show' and set its value to true
    };
    }

    componentDidMount() {
    // Set the favoriteColor state to 'red' when the component mounts
        this.setState({ favoriteColor: 'red' });
    // Start a timer to change the color to 'yellow' after 2 seconds
        setTimeout(() => {
            this.setState({ favoriteColor: 'yellow' });
        }, 2000);
    }

    componentDidUpdate(prevProps, prevState) {
    // Log the color change after each update
        if (prevState.favoriteColor !== this.state.favoriteColor) {
        console.log(`Color changed to ${this.state.favoriteColor}`);
        }
        // Log "after update" after each update
        console.log("after update");
    }

    handleDelete = () => {
        // Function to update the value of the show property to false
        this.setState({ show: false });
    }

    render() {
        return (
            <div>
            <h1>My favorite color is {this.state.favoriteColor}</h1>
            {this.state.show && <Child />} {/* Render Child component only if show is true */}
            <button onClick={this.handleDelete}>Delete</button> {/* Button to delete Child component */}
            </div>
        );
    }
}

class Child extends Component {
    componentWillUnmount() {
      // Alert a message when the component is unmounted
      alert("Child component is unmounted");
    }
    render() {
        return <h2>Hello World!</h2>;
    }
}

export default ColorChanger;


