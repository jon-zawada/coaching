import React from 'react';

const AvailableTimes = ({ times, time, next, updateTime }) => (
  <div className="form1-container">
    <ul className="available-times">
      {times.map((time, i) => (
        <li key={i} onClick={updateTime}>{time}</li>
      ))}
    </ul>
    <button className="btn" id='next' onClick={next} disabled={time === ''}>Next</button>
  </div>
);

export default AvailableTimes;
