import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="background">
    <h1>Challenger Level Coaching </h1>
    <div id="book">
      <Link className="link" to="/booking">Book Now</Link>
    </div>
  </div>
);

export default Home;
