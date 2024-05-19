// "components/CalendarContainer.js"
import { connect } from 'react-redux';
import Calendar from './Calendar';
import { selectDate } from '../actions/actions';

const mapStateToProps = state => ({
  selectedDate: state.selectedDate
});

const mapDispatchToProps = dispatch => ({
  handleDateChange: e => {
    console.log("New Date:", e.target.value); // logging
    dispatch(selectDate(e.target.value))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
