// continuation of the Exercise2===========================================================================================

import React, { Component } from 'react';

class UserFavoriteAnimals extends Component {
  render() {
    return (
      <div>
        <h2>User's Favorite Animals:</h2>
        <ul>
          {/* Use map to render each favorite animal */}
          {this.props.favAnimals.map((animal, index) => (
            // Use the index as the key to uniquely identify each item
            <li key={index}>{animal}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default UserFavoriteAnimals;
