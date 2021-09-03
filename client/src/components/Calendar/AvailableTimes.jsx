import React from 'react';

const AvailableTimes = ({ times }) => (
  <ul className="available-times">
    {times.map((time, i) => (
      <li key={i}>{time}</li>
    ))}
  </ul>
);

export default AvailableTimes;
