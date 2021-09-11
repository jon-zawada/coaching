import React, { useState } from 'react';

const AvailableTimes = ({ times, time, next, updateTime }) => {
  const [activeIndex, setIndex] = useState(null);
  return (
    <div className="form1-container">
      <ul className="available-times">
        {times.map((t, i) => {
          const className = i === activeIndex ? 'active' : null;
          return (
            <li key={i} className={className}>
              <div
                onClick={(e) => {
                  updateTime(e);
                  setIndex(i);
                }}
              >
                {t}
              </div>
            </li>
          );
        })}
      </ul>
      <button type="button" className="btn" onClick={next} disabled={time === ''}>Next</button>
    </div>
  );
};

export default AvailableTimes;
