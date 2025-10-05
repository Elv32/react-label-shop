import React from 'react';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { SubHeading1 } from '../../Components';
import { imagess } from '../../constants';
import './Chef2.css';

const Chef2 = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };
  const imageKeys = Object.keys(imagess);
  return (
    <div className="chef2-container">
      <div className="gallery-container">
      <div className="gallery-images" ref={scrollRef}>
          {imageKeys.map((key, index) => (
            <div className="gallery-card" key={`gallery_image-${index + 1}`}>
              <img src={imagess[key]} alt={`gallery_image-${index + 1}`} />
            </div>
          ))}
        </div>
        <div className="gallery-arrows">
          <BsArrowLeftShort className="arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="arrow-icon" onClick={() => scroll('right')} />
        </div>
      </div>
      <div className="info-container">
        <SubHeading1 title="Our History" />
        <div className="chef-content">
          <p className="opensans">Goated Collection | Instalment 1 | Delmas 32 </p>
        </div>
        <p className="opensans">
        "To honor God is a deeply personal and spiritual commitment that transcends any one religious tradition or belief system. It signifies a profound reverence and respect for the divine, a recognition of the higher power that is often central to one's faith. Honoring God involves living a life guided by principles of love, compassion, and righteousness, as well as a dedication to selflessness and service to others. It is a continuous journey of self-improvement, seeking to align one's actions and intentions with the values and teachings attributed to the divine, and finding purpose and fulfillment in the pursuit of a more meaningful and purposeful existence."
        </p>
      </div>
    </div>
  );
};

export default Chef2;
