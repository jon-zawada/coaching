import React from 'react';
import MonthList from './MonthList';

const MonthNav = ({ show, months, currentMonth, popUpHandler, setMonth }) => (
  <span className="label-month" onClick={popUpHandler} name="showMonthPopup">
    {currentMonth}
    {show ? <MonthList months={months} setMonth={setMonth} /> : null}
  </span>
);

export default MonthNav;
