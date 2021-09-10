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
        <button className="btn" id='prev' disabled>Prev</button>
        <button className="btn" id='next'>Next</button>
    </div>
    );
  }
}

export default Form;
