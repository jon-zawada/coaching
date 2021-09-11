import React from 'react';

const ConfirmInfo = ({ time, name, ign, discord, region, email, prev }) => (
  <div className="form3-container">
    <div title="Confirm">Confirm</div>
    <ul>
      <li>Name: {name}</li>
      <li>Email: {email}</li>
      <li>Summoner Name: {ign}</li>
      <li>Discord: {discord}</li>
      <li>Region: {region}</li>
      <li>Session Time: {time}</li> 
      {/* add date to time eventually */}
    </ul>
    <button onClick={prev}>Prev</button>
    <button>Confirm</button>
  </div>
);

export default ConfirmInfo;
