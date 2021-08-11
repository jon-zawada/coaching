import React from 'react';

const YearNav = ({ show, currentYear, popUpHandler }) => {
  const yearDisplay = (
    <span className="label-year" onClick={popUpHandler} name="showYearPopup">
      {currentYear}
    </span>
  );
  console.log(show, "SHOW")
  return (
    show ? null : yearDisplay
  );
};

export default YearNav;
