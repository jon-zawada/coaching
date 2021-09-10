import React from 'react';
import AvailableTimes from './AvailableTimes';
import { times } from '../../../../db/times';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      step: 1,
      ign: '',
      region: '',
      date: '',
      time: '',
      discord: '',
    };
    this.nextStep = this.nextStep.bind(this);
    this.prevStep = this.prevStep.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    this.updateTime = this.updateTime.bind(this);
  }

  nextStep() {
    const { step } = this.state;
    if (step === 3) return;
    this.setState({
      step: step + 1
    });
  }

  prevStep() {
    const { step } = this.state;
    if (step === 0) return;
    this.setState({
      step: step - 1
    });
  }

  changeHandler(event, prop) {
    event.preventDefault();
    this.setState({
      [prop]: event.target.value
    });
  }

  updateTime(event) {
    event.preventDefault();
    // console.log(event.target.innerText);
    this.setState({
      time: event.target.innerText,
      // TODO - add date here as well
    });
  }

  renderSwitch() {
    const { step, time } = this.state;
    switch (step) {
      case 1:
        return (
          <AvailableTimes
            times={times}
            next={this.nextStep}
            prev={this.prevStep}
            updateTime={this.updateTime}
            time={time}
          />
        );
      case 2:
        return (
          <div>hello2</div>
        );
      case 3:
        return (
          <div>foiwejfwe3</div>
        );
      default:
        return null;
    }
  }

  render() {
    return (
      <div className="container">
        <div className="progress-container">
          <div className="progress" id="progress"></div>
          <div className="circle active">1</div>
          <div className="circle">2</div>
          <div className="circle">3</div>
          <div className="circle">4</div>
        </div>
        {this.renderSwitch()}
      </div>
    );
  }
}

export default Form;
