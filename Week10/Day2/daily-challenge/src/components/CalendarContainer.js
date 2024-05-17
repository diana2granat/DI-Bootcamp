// "components/CalendarContainer.js"
import { connect } from 'react-redux';
import Calendar from './Calendar';
import { selectDate } from '../actions/actions';

const mapStateToProps = state => ({
  selectedDate: state.selectedDate
});

const mapDispatchToProps = dispatch => ({
  handleDateChange: e => dispatch(selectDate(e.target.value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);