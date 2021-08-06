import React from 'react';

const Weekdays = ({ weekdays }) => (
  weekdays.map((day) => (
    <td key={day} className="week-day">{day}</td>
  ))
);

export default Weekdays;
