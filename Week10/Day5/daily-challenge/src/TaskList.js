// "src/TaslList.js"
import React from 'react';
import { useSelector } from 'react-redux';
import { selectTasksByCategory } from './selectors';
import TaskItem from './TaskItem';

const TaskList = ({ categoryId }) => {
  const tasks = useSelector(state => selectTasksByCategory(state, categoryId));

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <TaskItem task={task} />
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
