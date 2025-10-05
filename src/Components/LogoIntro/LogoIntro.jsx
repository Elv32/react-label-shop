import React, { useEffect, useState, useRef } from 'react';
import './LogoIntro.css';
import logoImage from './logo.png';
import smokeVideo from './smoke.mp4';

const LogoIntro = () => {
  const [showLogo, setShowLogo] = useState(false);
  const [splitLogo, setSplitLogo] = useState(false);
  const logoRef = useRef();

  useEffect(() => {
    // Delay the appearance of the logo and prompt
    const timeout = setTimeout(() => {
      setShowLogo(true);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  const handleEnter = () => {
    if (!logoRef.current) return;

    const logoWidth = logoRef.current.clientWidth;
    const logoMiddleX = logoRef.current.getBoundingClientRect().left + logoWidth / 2;

    setSplitLogo(true);
    logoRef.current.style.transformOrigin = `${logoMiddleX}px center`;

    // After the split animation is finished, navigate to the homepage
    setTimeout(() => {
      window.location.href = '/home';
    }, 1000); // Adjust the timeout to match your animation duration
  };

  return (
    <div className="intro-container">
      {/* Add the div for the video background */}
      <div className="smoke">
        <video autoPlay loop muted>
          <source src={smokeVideo} type="video/mp4" />
        </video>
      </div>

      {showLogo && (
        <>
          {splitLogo ? (
            <div className="logo-split" ref={logoRef}>
              <div className="logo-left">
                <img src={logoImage} alt="Logo Left" />
              </div>
              <div className="logo-right">
                <img src={logoImage} alt="Logo Right" />
              </div>
            </div>
          ) : (
            <div className="logo">
              {/* Your logo image or HTML content goes here */}
              <img src={logoImage} alt="Logo" ref={logoRef} />
            </div>
          )}

          {!splitLogo && (
            <div className="enter-btn">
              {/* Attach the handleEnter event handler to the button */}
              <button onClick={handleEnter}>Enter</button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default LogoIntro;
