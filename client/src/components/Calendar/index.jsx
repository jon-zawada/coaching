/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import moment from 'moment';

import Weekdays from './Weekdays';
import Days from './Days';
import MonthNav from './MonthNav';

const weekdays = moment.weekdays(); // [Sunday, Monday]
const weekdaysShort = moment.weekdaysShort(); // [Sun, Mon]
const months = moment.months(); // [January, February]
const monthsShort = moment.monthsShort(); // [Jan, Feb]

class Calendar extends React.Component {
  constructor(props) {
    super(props);
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

  render() {
    const daysInMonth = this.daysInMonth();
    const firstDay = this.firstDayOfMonth();
    const currentDay = this.currentDate();
    return (
      <div className="calendar-container">
        <h2>Calendar</h2>
        <table className="calendar">
          <thead>
            <tr className="calendar-header">
              <td colSpan="5">
                <MonthNav months={months} currentMonth={this.month()} />
              </td>
            </tr>
          </thead>
          <tbody>
            <Weekdays weekdays={weekdaysShort} />
            <Days daysInMonth={daysInMonth} firstDay={firstDay} currentDay={currentDay} />
          </tbody>
        </table>
      </div>
    );
  }
}

export default Calendar;
