import React from 'react';

const ProgressBar = ({ step }) => {
  const percent = ((step - 1) / 2) * 100;
  return (
    <div className="progress-container">
      <div className="progress-bar" style={{ width: `${percent}%` }} />
      {[...Array(3)].map((item, index) => (
        <div className={index + 1 <= step ? "circle active" : "circle"} key={index * 123}>{index + 1}</div>
      ))}
    </div>
  );
};

export default ProgressBar;
