import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const handleButtonClick = () => {
  // Navigate to the specified URL when the button is clicked
  window.location.href = '/ArtistsProfile';
};
const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Sawce Music Group is a comprehensive management, music publishing, record label, and entertainment company. Our mission is to bring music from various regions and artists to the world. We firmly believe that everyone has a unique message to share, and our aim is to bridge the gap and make that possible.</p>
        <button onClick={handleButtonClick}  className="custom__button">Learn More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our Purpose</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Our goal is to highlight and promote our talented musicians through press releases on our website and various other formats, as elaborated in the upcoming question. Additionally, we aim to create an attractive Electronic Press Kit (EPK) to better serve our musicians' touring requirements.</p>
        <button onClick={handleButtonClick}  className="custom__button">Learn More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;