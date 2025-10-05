import React from 'react';
import { SubHeading } from '../../Components';
import { images } from '../../constants';
import './Header.css';
import { Link, } from 'react-router-dom'; // Import Link from React Router
const handleButtonClick = () => {
  // Navigate to the specified URL when the button is clicked
  window.location.href = '/about';
};
const Header = () => (
  <div className="app__header app__wrapper section__padding">
    <div className="app__header-content">
      <SubHeading title="Chase Your Dream" />
      <h1 className="app__header-h1">Sawce Music Group</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>We firmly believe that everyone has a unique message to share,
        and our aim is to bridge the gap and make that possible
      </p>
      <button onClick={handleButtonClick} className="app__header-button">Learn more</button>
      
    </div>
    <div className="app__header-image">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;


