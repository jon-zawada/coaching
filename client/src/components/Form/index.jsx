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

  renderSwitch() {
    const { step } = this.state;
    switch (step) {
      case 1:
        return (
          <AvailableTimes times={times} />
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
    const { step } = this.state;
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
        <button className="btn" id='prev' onClick={this.prevStep} disabled={step === 1}>Prev</button>
        <button className="btn" id='next' onClick={this.nextStep} disabled={step === 3}>Next</button>
    </div>
    );
  }
}

export default Form;
