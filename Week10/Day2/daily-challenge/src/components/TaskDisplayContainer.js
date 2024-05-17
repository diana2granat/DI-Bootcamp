// "/components/TaskDisplayContainer.js"
import { connect } from 'react-redux';
import TaskDisplay from './TaskDisplay';
import { editTask, deleteTask } from '../actions/actions';

const mapStateToProps = state => ({
  tasks: state.tasks[state.selectedDate] || []
});

const mapDispatchToProps = dispatch => ({
  handleEdit: (taskId, updatedTask) => {
    dispatch((dispatch, getState) => {
      const state = getState();
      dispatch(editTask(state.selectedDate, taskId, updatedTask));
    });
  },
  handleDelete: taskId => {
    dispatch((dispatch, getState) => {
      const state = getState();
      dispatch(deleteTask(state.selectedDate, taskId));
    });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskDisplay);