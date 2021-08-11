import React from 'react';

const MonthList = ({ months, onSelectChange }) => {
  const popup = months.map((month) => (
    <div key={month}>
      <a href="#" onClick={(e) => {onSelectChange(e, month)}}>
        {month}
      </a>
    </div>
  ));
  return (
    <div className="month-popup">
      {popup}
    </div>
  );
};

export default MonthList;
