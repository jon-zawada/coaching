import React from 'react';
import MonthList from './MonthList';

const MonthNav = ({ show, months, currentMonth, popUpHandler, onSelectChange }) => (
  <span className="label-month" onClick={popUpHandler} name="showMonthPopup">
    {currentMonth}
    {show ? <MonthList months={months} onSelectChange={onSelectChange} /> : null}
  </span>
);

export default MonthNav;
