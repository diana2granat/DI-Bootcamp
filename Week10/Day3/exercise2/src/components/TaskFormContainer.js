// "components/TaskFormContainer.js"
import { connect } from 'react-redux';
import TaskForm from './TaskForm';
import { addTask } from '../actions/actions';

const mapStateToProps = (state) => ({
  selectedDate: state.selectedDate,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (description, selectedDate) => { // 
    const task = { id: Date.now(), description };
    console.log("Submitting task:", task, "for date:", selectedDate); // Add this log
    dispatch(addTask(selectedDate, task));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);