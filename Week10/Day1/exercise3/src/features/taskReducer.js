import { ADD_TODO, REMOVE_TODO } from './actions';

const initialState = {
  todos: []
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, text: action.payload };
    case REMOVE_TODO:
      return { ...state, text: action.payload };
    default:
      return state;
  }
};

export default taskReducer;
