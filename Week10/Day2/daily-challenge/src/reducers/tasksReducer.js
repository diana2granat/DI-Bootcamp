// "redux/tasksReducer.js"
import { ADD_TASK, EDIT_TASK, DELETE_TASK } from '../actions/ActionTypes';

const initialState = {
  tasks: {}
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      const { day, task } = action.payload;
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [day]: [...(state.tasks[day] || []), task]
        }
      };
    case EDIT_TASK:
      const { day: editDay, taskId, updatedTask } = action.payload;
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [editDay]: state.tasks[editDay].map(task =>
            task.id === taskId ? { ...task, ...updatedTask } : task
          )
        }
      };
    case DELETE_TASK:
      const { day: deleteDay, taskId: deleteTaskId } = action.payload;
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [deleteDay]: state.tasks[deleteDay].filter(task => task.id !== deleteTaskId)
        }
      };
    default:
      return state;
  }
};

export default tasksReducer;
