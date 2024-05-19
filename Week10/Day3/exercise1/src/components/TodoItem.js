// "components/TodoItem.js"
import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, removeTodo } from '../features/todoSlice';

function TodoItem({ todo }) {
  const dispatch = useDispatch();

  const handleToggleStatus = () => {
    dispatch(toggleTodo(todo.id));
  };

  const handleRemoveTodo = () => {
    dispatch(removeTodo(todo.id));
  };

  return (
    <li>
      <span style={{ textDecoration: todo.status === 'completed' ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
      <button onClick={handleToggleStatus}>
        {todo.status === 'active' ? 'Mark Completed' : 'Mark Active'}
      </button>
      <button onClick={handleRemoveTodo}>Remove</button>
    </li>
  );
}

export default TodoItem;
