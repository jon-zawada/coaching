import React from 'react';

const ClientInfo = ({
  changeHandler,
  name,
  ign,
  discord,
  region,
  email,
  next,
  prev
}) => (
  <div className="form2-container">
    <form>
      <label>Name</label>
      <input type="text" name="name" onChange={changeHandler} defaultValue={name} />
      <label>Email</label>
      <input type="text" name="email" onChange={changeHandler} defaultValue={email} />
      <label>League In Game Name</label>
      <input type="text" name="ign" onChange={changeHandler} defaultValue={ign} />
      <label>Discord</label>
      <input type="text" name="discord" onChange={changeHandler} defaultValue={discord} />
      <label>Region</label>
      <input type="text" name="region" onChange={changeHandler} defaultValue={region} />
      <button className="btn" id='prev' onClick={prev}>Prev</button>
      <button className="btn" id='next' onClick={next}>Next</button>
    </form>
  </div>
);

export default ClientInfo;
