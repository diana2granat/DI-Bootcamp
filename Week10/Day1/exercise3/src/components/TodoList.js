import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo, editTodo } from '../features/actions';

function TodoList() {
  const [todoText, setTodoText] = useState('');
  const [editText, setEditText] = useState('');
  const [editId, setEditId] = useState(null);
  const [filter, setFilter] = useState('all'); // Define filter state
  const todos = useSelector(state => state.taskReducer.todos);
  const dispatch = useDispatch();
  const editInputRef = useRef(null);

  console.log(todos);

  const handleAddTodo = () => {
    if (todoText.trim() === '') return;
    dispatch(addTodo(todoText, 'active')); // Pass 'active' as the default status
    setTodoText('');
  };

  const handleRemoveTodo = id => {
    dispatch(removeTodo(id));
  };

  const handleEdit = (id, text) => {
    setEditId(id);
    setEditText(text);
    if (editInputRef.current) {
      editInputRef.current.focus();
    }
  };

  const handleSaveEdit = id => {
    dispatch(editTodo(id, editText));
    setEditId(null);
    setEditText('');
  };

  const handleToggleStatus = id => {
    // Find the todo with the given id
    const todo = todos.find(todo => todo.id === id);
    // Toggle the status between 'active' and 'completed'
    const newStatus = todo.status === 'active' ? 'completed' : 'active';
    // Dispatch an action to update the todo status
    dispatch(editTodo(id, todo.text, newStatus));
  };

  const handleFilter = newStatus => {
    setFilter(newStatus); //filtering based on status
  };

  const filteredTodos = filter === 'all' ? todos : todos.filter(todo => todo.status === filter); // filter
  
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
      <div>
        <button onClick={() => handleFilter('all')}>Show All</button>
        <button onClick={() => handleFilter('completed')}>Show Completed</button>
        <button onClick={() => handleFilter('active')}>Show Active</button>
      </div>
      <ul>
        {filteredTodos.map(todo => (
          <li key={todo.id}>
            {editId === todo.id ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={e => setEditText(e.target.value)}
                  onBlur={() => handleSaveEdit(todo.id)}
                  ref={editInputRef}
                />
              </>
            ) : (
              <>
                <span>{todo.text}</span>
                <button onClick={() => handleToggleStatus(todo.id)}>
                  {todo.status === 'active' ? 'Mark Completed' : 'Mark Active'}
                </button>
                <button onClick={() => handleEdit(todo.id, todo.text)}>Edit</button>
                <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
