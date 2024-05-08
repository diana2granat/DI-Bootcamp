import React, { Component } from 'react';

class Example2 extends Component {
  render() {
    const { Skills } = this.props;
    if (!Skills) {
        return <div>Loading skills...</div>; // Display loading message
      }
    return (
      <div>
        <h2>Skills</h2>
        <ul>
          {Skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Example2;
