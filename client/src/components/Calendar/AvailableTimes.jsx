import React from 'react';

const AvailableTimes = ({ times }) => (
  <ul>
    {times.map((time, i) => (
      <li key={i}>{time}</li>
    ))}
  </ul>
);

export default AvailableTimes;
