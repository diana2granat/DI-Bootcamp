import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    // Log the error for debugging purposes
    console.error('Error caught in ErrorBoundary:', error, info);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      // Display a user-friendly fallback UI when an error occurs
      return <h1>Something went wrong. We're working on fixing it!</h1>;
    }

    return this.props.children; // Render the wrapped component if no error
  }
}

export default ErrorBoundary;
