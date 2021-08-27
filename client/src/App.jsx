import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Nav from './components/Navigation';
import Home from './pages/Home';
import Booking from './pages/Booking';

function App() {
  return (
    <Router>
      <Nav />
      <div className="background">
        <h2>Welcome to Jangos Coaching!</h2>
        <h3>Date: { new Date().toDateString() }</h3>
      </div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/booking" component={Booking} />
      </Switch>
    </Router>
  );
}

export default App;
