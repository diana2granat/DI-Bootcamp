export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const FILTER_TODO = 'FILTER_TODO';

export const addTodo = (text, status) => ({ // Pass status as an argument
  type: ADD_TODO,
  text,
  status // Include status in the action payload
});

export const removeTodo = id => ({
  type: REMOVE_TODO,
  id
});

export const editTodo = (id, text, status) => ({
  type: EDIT_TODO,
  id,
  text,
  status // Include status in the action payload
});

export const filterTodo = status => ({
  type: FILTER_TODO,
  status
});