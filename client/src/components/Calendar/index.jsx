/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import moment from 'moment';

import Weekdays from './Weekdays';

const weekdays = moment.weekdays(); // [Sunday, Monday]
const weekdaysShort = moment.weekdaysShort(); // [Sun, Mon]
const months = moment.months(); // [January, February]
const monthsShort = moment.monthsShort(); // [Jan, Feb]

class Calendar extends React.Component {
  constructor(props) {
    // console.log(weekdays, weekdaysShort, months);
    super(props);
    // this.width = props.width || '350px';
    // this.style = props.style || {};
    this.state = {
      moment: moment(),
      today: moment(),
      showMonthPopup: false,
      showYearPopup: false,
    };
  }

  year() {
    return this.state.moment.format('Y'); // 2021 string
  }

  month() {
    return this.state.moment.format('MMMM'); // August string
  }

  daysInMonth() {
    return this.state.moment.daysInMonth(); // 30 number
  }

  currentDate() {
    return this.state.moment.get('date'); // 6 number
  }

  currentDay() {
    return this.state.moment.format('D'); // 6 string
  }

  firstDayOfMonth() {
    const firstDay = moment(this.state.moment).startOf('month').format('d');
    return firstDay; // Day of week as number 0 - sun, 1 - mon
  }

  calendarDays() {
    const daysIn = [];
    for (let d = 1; d <= this.daysInMonth(); d++) {
      const className = d === this.currentDate() ? "day current-date" : "day";
      daysIn.push(
        <td key={d} className={className}>
          <span>{d}</span>
        </td>
      );
    }
    return daysIn;
  }

  blankCalendarDays() {
    const blanks = [];
    for (let i = 0; i < this.firstDayOfMonth(); i++) {
      blanks.push(
        <td className="empty-days">{""}</td>
      );
    }
    return blanks;
  }

  allCalendarDays() {
    const total = [...this.blankCalendarDays(), ...this.calendarDays()];
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
      <tr key={i*100}>
        {d}
      </tr>
    ));
    return trElems;
  }

  render() {
    // console.log(this.allCalendarDays());
    return (
      <div className="calendar-container">
        <h2>Calendar</h2>
        <table className="calendar">
          <thead>
            <tr className="calendar-header">
            </tr>
          </thead>
          <tbody>
            <Weekdays weekdays={weekdaysShort} />
            {this.allCalendarDays()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Calendar;


