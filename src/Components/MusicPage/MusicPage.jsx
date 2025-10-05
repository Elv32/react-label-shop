// MusicPage.js

import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../../container/Footer/Footer';
import './MusicPage.css';
import headerImage from './headerImage.jpg';

const MusicEntry = ({ title, appleMusicLink, spotifyLink, soundCloudLink,amazonLink,youtubeLink, }) => {

  
  return (
    <div className="music-entry">

      <h2>{title}</h2>
      <p>Listen on:</p>
      <ul>
        {appleMusicLink && (
          <li>
            <a href={appleMusicLink} target="_blank" rel="noopener noreferrer">
              Apple Music
            </a>
          </li>
        )}
        {spotifyLink && (
          <li>
            <a href={spotifyLink} target="_blank" rel="noopener noreferrer">
              Spotify
            </a>
          </li>
        )}
        {soundCloudLink && (
          <li>
            <a href={soundCloudLink} target="_blank" rel="noopener noreferrer">
              SoundCloud
            </a>
          </li>
          
        )}
        {/* Add more platforms as needed */}
        {amazonLink && (
          <li>
            <a href={soundCloudLink} target="_blank" rel="noopener noreferrer">
              Amazon Music
            </a>
          </li>
          
        )}
        {youtubeLink && (
          <li>
            <a href={soundCloudLink} target="_blank" rel="noopener noreferrer">
              Youtube
            </a>
          </li>
          
        )}
      </ul>
    </div>
  );
};

const MusicPage = () => {
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
  const musicEntries = [
    {
      title: 'Discover Our songs',
      appleMusicLink: 'https://music.apple.com/us/artist/jahn-don/1477655612',
      spotifyLink: 'https://open.spotify.com/artist/3MrpPVvv3YV8dDl2Ys17Yi?si=iR7EIbYrRACakT-LzHDlCw',
      soundCloudLink: 'https://soundcloud.app.goo.gl/fG8W3Hxi1LHtdax39',
      amazonLink: 'https://music.amazon.com/artists/B07WYFRZTX?ref=dm_sh_XH5tEDiZKd832Tq117v3DV8L5',
      youtubeLink: 'https://youtube.com/c/JAHNDON',
    },

    // Add more entries as needed
  ];

  return (
    <div className="music-page">
                     <Navbar />

      <div className="header1">
        <img src={headerImage} alt="Fun Header" className="header-image" />
        {showScrollDown && (
        <button className="scroll-down-button" onClick={scrollDown}>
          Scroll Down
        </button>
      )}
 
        <h3>Music Catalog</h3>
      </div>
      {musicEntries.map((entry, index) => (
        <MusicEntry key={index} {...entry} />
      ))}
      {showScrollUp && (
          <button className="scroll-up-button" onClick={scrollToTop}>
            Scroll Up
          </button>
        )}
            <Footer />

    </div>
  );
};

export default MusicPage;
