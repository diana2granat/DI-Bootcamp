//"src/TaskItem.js"
import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { editTask, updateTaskProgress } from './tasksSlice';

const TaskItem = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [taskName, setTaskName] = useState(task.name);
  const dispatch = useDispatch();

  const handleEdit = useCallback(() => {
    dispatch(editTask({ ...task, name: taskName }));
    setIsEditing(false);
  }, [dispatch, task, taskName]);

  const handleComplete = useCallback(() => {
    dispatch(updateTaskProgress({ taskId: task.id, progress: !task.completed }));
  }, [dispatch, task]);

  return (
    <div>
      {isEditing ? (
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          onBlur={handleEdit}
        />
      ) : (
        <span>{task.name}</span>
      )}
      <button onClick={() => setIsEditing(true)}>Edit</button>
      <button onClick={handleComplete}>
        {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
      </button>
    </div>
  );
};

export default TaskItem;
