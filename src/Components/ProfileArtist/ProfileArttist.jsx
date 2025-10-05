import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../../container/Footer/Footer';
import images from '../../constants/images';
import MusicPage1 from '../MusicPage1/MusicPage1'; 

import './ProfileArtist.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

const ProfileArtist = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollUp, setShowScrollUp] = useState(false);
  const [showScrollDown, setShowScrollDown] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollUp(window.scrollY > window.innerHeight / 2);
      setShowScrollDown(window.scrollY < window.innerHeight);
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
<div>

<Navbar onMenuToggle={() => setIsMenuOpen(!isMenuOpen)} />
      <div className={`profile-artist-container ${isMenuOpen ? 'menu-open' : ''}`}>
        <Link to="/Profile"></Link>

      <header className="header">
        <Slider {...settings}>
          <div className="artist-slide">
            <div className="artist">
            <img
                  src={images.artist1}
                  alt="Artist 1"
                  className={`artist-image ${isMenuOpen ? 'hidden' : ''}`}
                />
              <div className="artist-details">
                <h1 className="artist-name">Jahn Don</h1>
                <a
                  href={`https://ventsmagazine.com/2023/12/19/jahn-don-a-voice-of-hope-in-music/`} 
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Bio
                </a>
              </div>
            </div>
          </div>
          <div className="artist-slide">
            <div className="artist">
            <img
                  src={images.artist2}
                  alt="Artist 2"
                  className={`artist-image ${isMenuOpen ? 'hidden' : ''}`}
                />              <div className="artist-details">
                <h1 className="artist-name">More Info</h1>
                <a
                  href={`https://hiphoptoday.com/jahn-don-haitian-musician-bridging-the-gap-between-afro-rap-house-unique-flow/`} // Replace this with the actual URL
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Bio
                </a>
              </div>
            </div>
          </div>
          
        </Slider>

      {/* Scroll-down Button */}
 {showScrollDown && (
        <button className="scroll-down-button" onClick={scrollDown}>
          Scroll Down
        </button>
      )}
 
      </header>

    
<div className="discover-link">
  <span className="discover-text">Discover</span>
  <span className="divider"></span>
  <span className="view-artists-text">View Artists</span>
</div>


      <div className="search-bar">
        <input type="text" placeholder="Search Artists" className="search-input" />
        <button onClick={searchArtists} className="search-button">
          Search
        </button>
      </div>

      <div className="artist-grid">
        <div className="artist-card">
          <img src={images.artist4} alt="Artist 4" className="artist-card-image" />
          <div className="artist-card-details">
            <h1 className="artist-name">Jahn Don</h1>
            <Link to="/Bio"> {/* Update the path to match your route for Chef3 */}
                View Bio
              </Link>
          </div>
        </div>
        <div className="artist-card">
          <img src={images.artist5} alt="Artist 5" className="artist-card-image" />
          <div className="artist-card-details">
            <h1 className="artist-name">31 Sovaj</h1>
            <Link to='/viewbio'> {/* Update the path to match your route for Chef3 */}
                View Bio
              </Link>
          </div>
        </div>
        
      </div>
      {showScrollUp && (
          <button className="scroll-up-button" onClick={scrollToTop}>
            Scroll Up
          </button>
        )}
        <MusicPage1/>
      <Footer />
    </div>

    </div>
  );
};

const searchArtists = () => {
  // Implement artist search functionality here
};

export default ProfileArtist;
