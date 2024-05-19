// "/components/TaskDisplayContainer.js"
import { connect } from 'react-redux';
import TaskDisplay from './TaskDisplay';
import { editTask, deleteTask } from '../actions/actions';

const mapStateToProps = (state) => {
  const tasksForSelectedDate = state.tasks[state.selectedDate] || [];
  console.log('Tasks for selected date:', tasksForSelectedDate); // Debugging line
  return {
    tasks: tasksForSelectedDate,
  };
};

const mapDispatchToProps = (dispatch) => ({
  handleEdit: (taskId, updatedTask) => {
    dispatch((dispatch, getState) => {
      const state = getState();
      dispatch(editTask(state.selectedDate, taskId, updatedTask));
    });
  },
  handleDelete: (taskId) => {
    dispatch((dispatch, getState) => {
      const state = getState();
      dispatch(deleteTask(state.selectedDate, taskId));
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskDisplay);