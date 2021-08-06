/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import moment from 'moment';

const weekdays = moment.weekdays(); // [Sunday, Monday];
const weekdaysShort = moment.weekdaysShort(); // [Sun, Mon];
const months = moment.months();

class Calendar extends React.Component {
  constructor(props) {
    console.log(weekdays, weekdaysShort, months);
    super(props);
    this.width = props.width || '350px';
    this.style = props.style || {};
    this.state = {
      moment: moment(),
      showMonthPopup: false,
      showYearPopup: false,
    };
  }

  year() {
    return this.state.moment.format('Y');
  }

  month() {
    return this.state.moment.format('MMMM');
  }

  daysInMonth() {
    return this.state.moment.daysInMonth();
  }

  currentDate() {
    return this.state.moment.get('date');
  }

  currentDay() {
    return this.state.moment.format('D');
  }

  render() {
    return (
      <div className="calendar-container">
        <h2>Calendar</h2>
      </div>
    );
  }
}

export default Calendar;
