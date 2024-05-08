import './App.css'
import React, { useState, useEffect } from 'react';
import Example1 from './Example1';
import Example2 from './Example2';
import Example3 from './Example3';
import data from './data.json'; // Import the data file

function App() {
  const [allData, setData] = useState({}); // Use state to store data

  useEffect(() => {
    setData(data); // Set data on component mount
  }, []);

  return (
    <div>
      <Example1 SocialMedias={allData.SocialMedias} />
      <Example2 Skills={allData.Skills} />
      <Example3 Experiences={allData.Experiences} />
    </div>
  );
}

export default App;
