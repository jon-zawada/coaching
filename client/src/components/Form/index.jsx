import React from 'react';
import AvailableTimes from './AvailableTimes';
import ClientInfo from './ClientInfo';
import Confirm from './ConfirmInfo';
import { times } from '../../../../db/times';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      step: 1,
      name: '',
      ign: '',
      discord: '',
      region: '',
      email: '',
      date: '',
      time: '',
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

  changeHandler(event) {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  updateTime(event) {
    event.preventDefault();
    this.setState({
      time: event.target.innerText,
      // TODO - add date here as well
    });
  }

  renderSwitch() {
    const { step, time, name, ign, discord, region, email } = this.state;
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
          <ClientInfo
            changeHandler={this.changeHandler}
            name={name}
            ign={ign}
            discord={discord}
            email={email}
            region={region}
            next={this.nextStep}
            prev={this.prevStep}
          />
        );
      case 3:
        return (
          <Confirm
            time={time}
            name={name}
            ign={ign}
            discord={discord}
            region={region}
            email={email}
            prev={this.prevStep}
          />
        );
      default:
        return null;
    }
  }

  render() {
    const { step } = this.state;
    return (
      <div className="form-container">
        <div className="progress-container">
          <div className="progress" id="progress"></div>
          {/* <div className="circle active">1</div>
          <div className="circle">2</div>
          <div className="circle">3</div>
          <div className="circle">4</div> */}
          {[...Array(3)].map((item, index) => {
            console.log(index, step);
            return (
              <div className={index + 1 <= step ? "circle active" : "circle"}>{index + 1}</div>
            );
          })}
        </div>
        {this.renderSwitch()}
      </div>
    );
  }
}

export default Form;
