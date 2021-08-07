import React from 'react';
import MonthList from './MonthList';

const MonthNav = ({ show, months, currentMonth, popUpHandler }) => (
  <span className="label-month" onClick={popUpHandler} name="showMonthPopup">
    {currentMonth}
    {show ? <MonthList months={months} /> : null}
  </span>
);

export default MonthNav;
