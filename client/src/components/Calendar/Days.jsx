import React from 'react';

function validCalendarDays(daysInMonth, currentDay) {
  const daysIn = [];
  for (let d = 1; d <= daysInMonth; d++) {
    const className = d === currentDay ? "day current-date" : "day";
    daysIn.push(
      <td key={d} className={className}>
        <span>{d}</span>
      </td>
    );
  }
  return daysIn;
}

function blankCalendarDays(firstDay) {
  const blanks = [];
  for (let i = 0; i < firstDay; i++) {
    blanks.push(
      <td className="empty-days">{""}</td>
    );
  }
  return blanks;
}

function days(firstDay, daysInMonth, currentDay) {
  const total = [...blankCalendarDays(firstDay), ...validCalendarDays(daysInMonth, currentDay)];
  const rows = [];
  let cells = [];
  total.forEach((day, i) => {
    if (i % 7 !== 0) {
      cells.push(day);
    } else {
      rows.push([...cells]);
      cells = [];
      cells.push(day);
    }
    if (i === total.length - 1) {
      rows.push([...cells]);
    }
  });
  const trElems = rows.map((d, i) => (
    <tr key={i * 100}>
      {d}
    </tr>
  ));
  return trElems;
}

const Days = ({ daysInMonth, firstDay, currentDay }) => (days(firstDay, daysInMonth, currentDay));

export default Days;
