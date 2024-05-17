// "components/TaskDisplay.js"
import React from 'react';

const TaskDisplay = ({ tasks, handleEdit, handleDelete }) => (
  <ul>
    {tasks.map(task => (
      <li key={task.id}>
        {task.description}
        <button onClick={() => handleEdit(task.id)}>Edit</button>
        <button onClick={() => handleDelete(task.id)}>Delete</button>
      </li>
    ))}
  </ul>
);

export default TaskDisplay;
