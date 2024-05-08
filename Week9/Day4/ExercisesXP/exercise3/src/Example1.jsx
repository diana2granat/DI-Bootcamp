import React, { Component } from 'react';

class Example1 extends Component {
  render() {
    const { SocialMedias } = this.props;

    if (!SocialMedias) {
      return <div>Loading social media links...</div>; // Display loading message
    }
    return (
      <div>
        <h2>Social Media Links</h2>
        <ul>
          {SocialMedias.map((link) => (
            <li key={link}>
              <a href={link} target="_blank" rel="noreferrer noopener">
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Example1;
