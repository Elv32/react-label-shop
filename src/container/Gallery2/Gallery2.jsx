import React from 'react';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import { images } from '../../constants';
import './Gallery2.css';

const Gallery2 = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };
  const handleButtonClick = () => {
    // Navigate to the specified URL when the button is clicked
    window.location.href = 'https://2-h-g.com/pages/lookbook';
  };

  return (
    <div className="app__gallery flex__center"id="gallery">
      <div className="app__gallery-content">
      <h1 className="headtext__cormorant">LookBook</h1>
      <p className="p__opensans" style={{ color: '#AAAAAA', marginTop: '2rem' }}>Qualité Superieure</p>
      <button onClick={handleButtonClick}  className="custom__button">View More</button>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {[images.gallery05, images.gallery06, images.gallery07, images.gallery08,images.gallery09].map((image, index) => (
            <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
              <img src={image} alt="gallery_image" />
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
        <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />

        </div>
      </div>
    </div>
  );
};

export default Gallery2;