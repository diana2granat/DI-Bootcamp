// "components/TaskForm.js"
import React, { useState } from 'react';

const TaskForm = ({ onSubmit }) => {
  const [description, setDescription] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!description.trim()) return;
    onSubmit(description);
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={description}
        onChange={e => setDescription(e.target.value)}
        placeholder="Add a task"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TaskForm;