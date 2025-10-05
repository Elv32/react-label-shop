// MusicPage.js

import React, { useState, useEffect } from 'react';
import './MusicPage1.css';

const MusicEntry = ({ title, appleMusicLink, spotifyLink, soundCloudLink,amazonLink,youtubeLink,youtubLink, }) => {

  
  return (
    <div className="music-entry">

      <h2>{title}</h2>
      <p>other Blog links</p>
      <ul>
        {appleMusicLink && (
          <li>
            <a href={appleMusicLink} target="_blank" rel="noopener noreferrer">
            2 Trill Magazine
            </a>
          </li>
        )}
        {spotifyLink && (
          <li>
            <a href={spotifyLink} target="_blank" rel="noopener noreferrer">
            lyricselect
            </a>
          </li>
        )}
        {soundCloudLink && (
          <li>
            <a href={soundCloudLink} target="_blank" rel="noopener noreferrer">
              limitless
            </a>
          </li>
          
        )}
        {/* Add more platforms as needed */}
        {amazonLink && (
          <li>
            <a href={soundCloudLink} target="_blank" rel="noopener noreferrer">
            HIP HOP TRENDING
            </a>
          </li>
          
        )}
        {youtubeLink && (
          <li>
            <a href={soundCloudLink} target="_blank" rel="noopener noreferrer">
            Loading Magazine
            </a>
          </li>
          
        )}
        {youtubLink && (
          <li>
            <a href={soundCloudLink} target="_blank" rel="noopener noreferrer">
            dopeFUTURE
            </a>
          </li>
          
        )}
      </ul>
    </div>
  );
};

const MusicPage1 = () => {
 
  const musicEntries = [
    {
      appleMusicLink: 'https://2trillmagazine.com/2023/12/14/jahn-don-ft-andman-b3an/',
      spotifyLink: 'https://lyricselect.com/jahn-don-ft-andman-b3an/',
      soundCloudLink: 'https://limitless-magazine.com/2023/12/14/jahn-don-ft-andman-b3an/',
      amazonLink: 'https://6ixclouttv.com/jahn-don-ft-andman-b3an/',
      youtubeLink: 'https://www.loadingmag.com/jahn-don-ft-andman-b3an/',
      youtubLink: 'https://www.dopefuture.com/2023/12/jahn-don-ft-andman-b3an.html',

    },

    // Add more entries as needed
  ];

  return (
    <div className="music-page">
 
      {musicEntries.map((entry, index) => (
        <MusicEntry key={index} {...entry} />
      ))}
  
    </div>
  );
};

export default MusicPage1;
