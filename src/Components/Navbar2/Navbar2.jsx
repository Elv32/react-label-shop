import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { FaShoppingCart } from 'react-icons/fa'; // Import the cart icon
import { useCart } from '../Shop/CartContext'; 
import images from '../../constants/images';
import { Link } from 'react-router-dom';
import './Navbar2.css';

const Navbar2 = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };
  const { cartState } = useCart();

  const handleButtonClick = () => {
    // Navigate to the specified URL when the button is clicked
    window.location.href = 'https://2-h-g.com/collections/shop';
  };

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="app__logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="app__navbar-link">
          <Link to="https://2-h-g.com/collections/shop">2Hg Product</Link>
        </li>
        <li className="app__navbar-link">
          <Link to="https://2-h-g.com/collections/collection-0ne">Sawce Merch</Link>
        </li>
        <li className="app__navbar-link">
          <Link to="/login">My Account</Link>
        </li>
        <li className="app__navbar-link">
          <Link to="https://2-h-g.com/pages/about">Customer Service</Link>
        </li>
      </ul>
      <div className="app__navbar-login">
        <Link to="/home">Home</Link>
        <div className="app__navbar-divider" />
        {/* Change "Shop" to "Cart Shop" and add the cart icon */}
        <Link to="/shoppingcart" className="app__navbar-cart">
          <FaShoppingCart />
          {cartState.cart.length > 0 && (
          <span className="cart-item-count">{cartState.cart.length}</span>
        )}
        </Link>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          className="app__navbar-hamburger"
          onClick={handleToggleMenu}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen-overlay">
            <MdOutlineRestaurantMenu
              className="app__navbar-close"
              onClick={handleToggleMenu}
            />
            <ul className="app__navbar-smallscreen-links">
              <li className="app__navbar-smallscreen-link">
                <Link  onClick={handleButtonClick}>
                  2HG Product
                </Link>
              </li>
              <li className="app__navbar-smallscreen-link">
                <Link to='https://2-h-g.com/collections/collection-0ne'onClick={handleToggleMenu}>
                 Sawce Product
                </Link>
              </li>
              <li className="app__navbar-smallscreen-link">
                <Link to="/login" onClick={handleToggleMenu}>
                  My Account
                </Link>
              </li>
              <li className="app__navbar-smallscreen-link">
                <Link to="https://2-h-g.com/pages/about" onClick={handleToggleMenu}>
                  Customer Service
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar2;
