import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo } from '../features/actions';

function TodoList() {
  const [todoText, setTodoText] = useState('');
  const todos = useSelector(state => state.taskReducer.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (todoText.trim() === '') return;
    dispatch(addTodo(todoText));
    setTodoText('');
  };

  const handleRemoveTodo = id => {
    dispatch(removeTodo(id));
  };

  if (!Array.isArray(todos)) {
    return <div>Error: Todos is not an array</div>;
  }

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Add a new todo"
        value={todoText}
        onChange={e => setTodoText(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos ? (
          todos.map(todo => (
            <li key={todo.id}>
              {todo.text}
              <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
            </li>
          ))
        ) : (
          <li>No todos</li>
        )}
      </ul>
    </div>
  );
}

export default TodoList;
