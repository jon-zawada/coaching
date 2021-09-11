import React from 'react';

const ClientInfo = ({ changeHandler, name, ign, discord, region, email, next, prev }) => (
  <div>
    <form className="form2">
      <div className="form2-labels-list">
        <div className="label-input">
          <label>Name:</label>
          <input type="text" name="name" onChange={changeHandler} defaultValue={name} />
        </div>
        <div className="label-input">
          <label>Email:</label>
          <input type="text" name="email" onChange={changeHandler} defaultValue={email} />
        </div>
        <div className="label-input">
          <label>Summoner Name:</label>
          <input type="text" name="ign" onChange={changeHandler} defaultValue={ign} />
        </div>
        <div className="label-input">
          <label>Discord:</label>
          <input type="text" name="discord" onChange={changeHandler} defaultValue={discord} />
        </div>
        <div className="label-input">
          <label>Region:</label>
          <input type="text" name="region" onChange={changeHandler} defaultValue={region} />
        </div>
      </div>
      <div className="form2-button-container">
        <button type="button" className="btn" onClick={prev}>Prev</button>
        <button type="button" className="btn" onClick={next}>Next</button>
      </div>
    </form>
  </div>
);

export default ClientInfo;
