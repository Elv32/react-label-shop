import React from 'react';

import { SubHeading } from '../../Components';
import { images } from '../../constants';
const handleButtonClick = () => {
  // Navigate to the specified URL when the button is clicked
  window.location.href = 'https://www.google.com/maps/place/110+Tower,+110+SE+6th+St+%231700,+Fort+Lauderdale,+FL+33301/@26.1143872,-80.1442558,17z/data=!3m1!4b1!4m6!3m5!1s0x88d90058691cb4b7:0x12243f2a99b5b5f!8m2!3d26.1143872!4d-80.1416809!16s%2Fg%2F11qz9htc7z?entry=ttu';
};
const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Find Us</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">110 SE 6th Street STE 1700, Fort Lauderdale FL 33301</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening Hours</p>
        <p className="p__opensans">Mon - Fri: 10:00 am - 05:00 pm</p>
        <p className="p__opensans">Sat - Sun: closed</p>
      </div>
      <button onClick={handleButtonClick}  className="custom__button" style={{ marginTop: '2rem' }}>Visit Us</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="finus_img" />
    </div>
  </div>
);

export default FindUs;