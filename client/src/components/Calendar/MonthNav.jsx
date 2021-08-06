import React from 'react';
import MonthList from './MonthList';

const MonthNav = ({ months, currentMonth }) => (
  <span className="label-month">
    {currentMonth}
    <MonthList months={months} />
  </span>
);

export default MonthNav;