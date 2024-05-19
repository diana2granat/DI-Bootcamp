// "components/Calendar.js"
import React from 'react';

const Calendar = ({ selectedDate, handleDateChange }) => {
  console.log("Selected Date:", selectedDate); // logging
  return (
    <input 
      type="date" 
      value={selectedDate} 
      onChange={handleDateChange} 
    />
  );
};

export default Calendar;