// "components/Calendar.js"
import React from 'react';

const Calendar = ({ selectedDate, handleDateChange }) => (
  <input type="date" value={selectedDate} onChange={handleDateChange} />
);

export default Calendar;
