import React, { Component } from 'react';

class App extends Component {
  state = {
    message: ''
  };

  async componentDidMount() {
    try {
      const response = await fetch('/api/hello');
      const data = await response.text();
      console.log('Data from server:', data); // Log data received from the server
      this.setState({ message: data });
    } catch (error) {
      console.error('Error fetching message:', error);
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}

export default App;
