import React from 'react';

import { SubHeading, Menuitem } from '../../Components';
import { data, images } from '../../constants';
import './SpecialMenu.css';

const handleButtonClick = () => {
  // Navigate to the specified URL when the button is clicked
  window.location.href = '/Music';
};
const SpecialMenu = () => (

  
  <div className="app__specialMenu flex__center section__padding" id="music">
    <div className="app__specialMenu-title">
      <SubHeading title="Top Music" />
      <h1 className="headtext__cormorant">discover our talented</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">Rap & Trap</p>
        <div className="app__specialMenu_menu_items">
          {data.wines.map((wine, index) => (
            <Menuitem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu__img" />
      </div>

      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">Afro</p>
        <div className="app__specialMenu_menu_items">
          {data.cocktails.map((cocktail, index) => (
            <Menuitem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
          ))}
        </div>
      </div>
    </div>

    <div style={{ marginTop: 15 }}>
    <button onClick={handleButtonClick}  className="custom__button">View More</button>
    </div>
  </div>
);

export default SpecialMenu;