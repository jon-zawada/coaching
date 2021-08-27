/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import moment from 'moment';

import Weekdays from './Weekdays';
import Days from './Days';
import MonthNav from './MonthNav';
import YearNav from './YearNav';

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
    this.popUpHandler = this.popUpHandler.bind(this);
    this.setMonth = this.setMonth.bind(this);
    this.monthChange = this.monthChange.bind(this);
    this.yearChange = this.yearChange.bind(this);
  }

  setMonth(month) {
    // can be optimized
    const monthIndex = months.indexOf(month);
    let newContext = { ...this.state.moment };
    newContext = moment(newContext).set("month", monthIndex);
    this.setState({
      moment: newContext
    });
  }

  monthChange(event) {
    const name = event.target.className;
    let newMonth = { ...this.state.moment };
    if (name === 'sub-month') newMonth = moment(newMonth).subtract(1, 'M');
    if (name === 'add-month') newMonth = moment(newMonth).add(1, 'M');
    this.setState({
      moment: newMonth
    });
  }

  yearChange(event) {
    const name = event.target.className;
    let newYear = { ...this.state.moment };
    if (name === 'sub-year') newYear = moment(newYear).subtract(1, 'Y');
    if (name === 'add-year') newYear = moment(newYear).add(1, 'Y');
    this.setState({
      moment: newYear
    });
  }

  popUpHandler(event) {
    const name = event.target.getAttribute('name');
    if (!name) return;
    const showMonths = this.state[name];
    this.setState({
      [name]: !showMonths
    });
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
    const month = this.month();
    const year = this.year();
    const { showMonthPopup } = this.state;
    return (
      <div className="calendar-container">
        <h2>Calendar</h2>
        <table className="calendar">
          <thead>
            <tr className="calendar-header">
              <td className="month-year-container"colSpan="7">
              <span className="sub-year" onClick={this.yearChange}>{'<<-'}</span>
                <span className="sub-month" onClick={this.monthChange}>{'<-'}</span>
                <MonthNav
                  show={showMonthPopup}
                  months={months}
                  currentMonth={month}
                  popUpHandler={this.popUpHandler}
                  setMonth={this.setMonth}
                />
                {/* remove this */}
                {' '}
                <YearNav
                  currentYear={year}
                />
                <span className="add-month" onClick={this.monthChange}>{'->'}</span>
                <span className="add-year" onClick={this.yearChange}>{'->>'}</span>
              </td>
            </tr>
          </thead>
          <tbody>
            <Weekdays weekdays={weekdaysShort} />
            <Days
              daysInMonth={daysInMonth}
              firstDay={firstDay}
              currentDay={currentDay}
            />
          </tbody>
        </table>
      </div>
    );
  }
}

export default Calendar;
