import React from 'react';

import Calendar from './Calendar';
import Nav from './Navigation';

function App() {
  return (
    <div>
      <Nav />
      <h2>Welcome to Jangos Coaching!</h2>
      <h3>Date: { new Date().toDateString() }</h3>
      <Calendar />
    </div>
  );
}

export default App;
