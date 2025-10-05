import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import your custom CSS for styling

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Our Website</h1>
      <p>Explore our offerings and join our membership program for exclusive access.</p>
      <Link to="/member" className="join-button">Join Membership</Link>
    </div>
  );
};

export default Home;
