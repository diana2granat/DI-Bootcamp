// "src/reducers/rootReducer.js"
import { combineReducers } from 'redux';
import tasksReducer from './tasksReducer';
import { SELECT_DATE } from '../actions/ActionTypes';

const selectedDateReducer = (state = '', action) => {
  switch (action.type) {
    case SELECT_DATE:
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  tasks: tasksReducer,
  selectedDate: selectedDateReducer
});

export default rootReducer;