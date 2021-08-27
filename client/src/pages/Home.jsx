import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="background">
    <h2>Welcome to Jangos Coaching!</h2>
    <h3>Date: { new Date().toDateString() }</h3>
    <Link to="/booking">Book Now</Link>
  </div>
);

export default Home;
