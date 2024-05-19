// src/App.js
import './App.css';
import React from 'react';
import CalendarContainer from './components/CalendarContainer';
import TaskFormContainer from './components/TaskFormContainer';
import TaskDisplayContainer from './components/TaskDisplayContainer';

const App = () => {
  return (
    <div>
      <h1>Daily Planner</h1>
      <CalendarContainer />
      <TaskFormContainer />
      <TaskDisplayContainer />
    </div>
  );
};

export default App;
