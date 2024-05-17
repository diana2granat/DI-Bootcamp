// "App.js"
import './App.css';
import React from 'react';
import CalendarContainer from './components/CalendarContainer';
import TaskDisplayContainer from './components/TaskDisplayContainer';
import TaskFormContainer from './components/TaskFormContainer';

const App = () => (
  <div>
    <h1>Daily Planner App</h1>
    <CalendarContainer />
    <TaskDisplayContainer />
    <TaskFormContainer />
  </div>
);

export default App;