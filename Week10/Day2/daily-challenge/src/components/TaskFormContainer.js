// "components/TaskFormContainer.js"
import { connect } from 'react-redux';
import TaskForm from './TaskForm';
import { addTask } from '../actions/actions';

const mapStateToProps = state => ({
  selectedDate: state.selectedDate
});

const mapDispatchToProps = dispatch => ({
  onSubmit: description => {
    const task = { id: Date.now(), description };
    dispatch((dispatch, getState) => {
      const state = getState();
      dispatch(addTask(state.selectedDate, task));
    });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);