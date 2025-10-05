import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram, FiX } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../Components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">110 SE 6th Street STE 1700, Fort Lauderdale FL 33301</p>
        <p className="p__opensans">+1 888-869-9494</p>
        <p className="p__opensans">info@sawcemusicgroup.com</p>

      </div>

      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="Gericht Logo" /> {/* Add descriptive alt text */}
        <p className="p__opensans">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
        <img src={images.spoon} alt="" className="spoon__img" style={{ marginTop: 15 }} /> {/* Add empty alt prop for decorative image */}
        <div className="app__footer-links">
  <div className="app__footer-links_icons">
    <a href="https://www.facebook.com/profile.php?id=100063768950961&mibextid=kFxxJD" target="_blank" rel="noopener noreferrer">
      <FiFacebook />
    </a>
    <a href="https://x.com/sawcemusicgroup?s=21&t=QD6azh0dwlw_BINd9DKPkQ" target="_blank" rel="noopener noreferrer">
      <FiTwitter />
    </a>
    <a href="https://www.instagram.com/sawcemusicgroup?igsh=MTR4bjB0bHdld2poZw==" target="_blank" rel="noopener noreferrer">
      <FiInstagram />
    </a>
  </div>
</div>
</div>
      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">10:00 am - 5:00 pm</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">Closed</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2023 Sawce. All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;
