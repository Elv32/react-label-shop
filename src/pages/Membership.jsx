import React from 'react';
import { Link } from 'react-router-dom';
import './Membership.css'; // Import your custom CSS for styling

const Membership = () => {
  return (
    <div className="membership-container">
      <h1>Membership Plan</h1>
      <p>Unlock premium content for just $15/month!</p>
      <Link to="/payment" className="subscribe-button">Subscribe Now</Link>
    </div>
  );
};

export default Membership;
