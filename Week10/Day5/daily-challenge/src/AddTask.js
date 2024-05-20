// "src/AddTask.js"
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from './tasksSlice';

const AddTask = ({ categoryId }) => {
  const [taskName, setTaskName] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (taskName.trim()) {
      dispatch(addTask({ id: Date.now().toString(), name: taskName, categoryId, completed: false }));
      setTaskName('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="New Task"
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default AddTask;
