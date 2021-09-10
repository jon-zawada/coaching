import React from 'react';

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
  }

  nextStep() {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  }

  prevStep() {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  }

  renderSwitch() {
    const { step } = this.state;
    switch (step) {
      case 1:
        return (
          <div>hi1</div>
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
        <button className="btn" id='prev' disabled>Prev</button>
        <button className="btn" id='next'>Next</button>
    </div>
    );
  }
}

export default Form;
