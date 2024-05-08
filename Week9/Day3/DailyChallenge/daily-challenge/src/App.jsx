import './App.css'
import React, { Component } from 'react';
import FormComponent from './FormComponent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        firstName: '',
        lastName: '',
        age: '',
        gender: 'male',
        destination: '',
        nutsFree: false,
        lactoseFree: false,
        vegan: false
      }
    };
  }

  handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    // Use a ternary operator to handle different types of inputs
    const newValue = type === 'checkbox' ? checked : value;

    this.setState(prevState => ({
      formData: {
        ...prevState.formData,
        [name]: newValue
      }
    }));
  }

  render() {
    return (
      <div className="App">
        <FormComponent
          formData={this.state.formData}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default App;
