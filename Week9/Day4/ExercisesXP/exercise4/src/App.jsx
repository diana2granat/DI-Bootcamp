import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [responseData, setResponseData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const proxyUrl = 'https://webhook.site/99877cb6-6b87-4ee4-b2c5-a23888b22fc9'; // Replace with your proxy URL
  // Remove the insecure 'Access-Control-Allow-Origin' header

  const handleClick = async () => {
    const data = {
      key1: 'myusername',
      email: 'mymail@gmail.com',
      name: 'Isaac',
      lastname: 'Doe',
      age: 27,
    };
  
    const jsonData = JSON.stringify(data);
  
    try {
      const response = await fetch(proxyUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: jsonData,
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        const text = await response.text();
        throw new Error(`Invalid response format: expected JSON, got '${text}'`);
      }
  
      const responseJson = await response.json();
      setResponseData(responseJson);
    } catch (error) {
      setErrorMessage(error.message);
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Send Data</button>
      {responseData && <pre>{JSON.stringify(responseData, null, 2)}</pre>}
      {errorMessage && <p>Error: {errorMessage}</p>}
    </div>
  );
}

export default App;
