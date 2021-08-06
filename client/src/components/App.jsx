import React from 'react';

import Calendar from './Calendar';
function App() {
  return (
    <div>
      <h2>Welcome to Jangos Coaching!</h2>
      <h3>Date: { new Date().toDateString() }</h3>
      <Calendar />
    </div>
  );
}

export default App;
