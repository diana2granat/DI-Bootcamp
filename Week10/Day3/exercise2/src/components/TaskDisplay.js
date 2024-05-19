// src/components/TaskDisplay.js
import React, { useState } from 'react';

const TaskDisplay = ({ tasks, handleEdit, handleDelete }) => {
  console.log('Received tasks:', tasks); // loggings
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [newDescription, setNewDescription] = useState('');

  const handleSave = (taskId) => {
    handleEdit(taskId, { description: newDescription });
    setEditingTaskId(null);
    setNewDescription('');
  };

  return (
    <ul>
      <h1>Task Display</h1>
      {tasks.map(task => (
        <li key={task.id}>
          {editingTaskId === task.id ? (
            <>
              <input
                type="text"
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
              />
              <button onClick={() => handleSave(task.id)}>Save</button>
            </>
          ) : (
            <>
              {task.description}
              <button onClick={() => {
                setEditingTaskId(task.id);
                setNewDescription(task.description);
              }}>Edit</button>
              <button onClick={() => handleDelete(task.id)}>Delete</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TaskDisplay;

