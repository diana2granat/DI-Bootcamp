import React, { Component } from 'react';

class Example3 extends Component {
  render() {
    const { Experiences } = this.props;
    if (!Experiences) {
      return <div>Loading experiences...</div>; // Display loading message
    }

    return (
      <div>
        <h2>Experiences</h2>
        {Experiences.map((experience) => (
          <div key={experience.company}>
            <h3>{experience.company}</h3>
            <p>{experience.position} - {experience.duration}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Example3;
