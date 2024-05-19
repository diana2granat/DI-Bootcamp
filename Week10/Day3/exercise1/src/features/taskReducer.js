//"features/taskReducer.js"
import { ADD_TODO, REMOVE_TODO, EDIT_TODO, FILTER_TODO, TOGGLE_TODO } from './actions';

const initialState = {
  todos: [],
  filter: 'all' // 'all', 'completed', 'active'
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, { id: state.todos.length + 1, text: action.text, status: action.status }]
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.id)
      };
    case EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => todo.id === action.id ? { ...todo, text: action.text, status: action.status } : todo)
      };
    case FILTER_TODO:
      return { ...state, filter: action.status };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.id ? { ...todo, status: todo.status === 'active' ? 'completed' : 'active' } : todo
        )
      };
    default:
      return state;
  }
};

export default taskReducer;
