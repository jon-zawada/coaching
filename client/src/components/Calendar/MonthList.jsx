import React from 'react';

const MonthList = ({ months }) => {
  const popup = months.map((month) => (
    <div key={month}>
      <a href="#">
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
