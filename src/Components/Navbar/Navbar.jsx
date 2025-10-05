import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="app__logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="app__navbar-link">
          {/* Use Link component to navigate to the Artist Profile page */}
          <Link to="/ArtistsProfile">Artist Profile</Link>
        </li>
        <li className="app__navbar-link"> 
          <Link to = "/https://onerpm.link/539933473348/" > music</Link>
        </li>
        <li className="app__navbar-link">
        <Link to="/Event">Event</Link>
        </li>
        <li className="app__navbar-link">
          {/* Use Link component to navigate to the Membership page */}
          <Link to="https://hiphoptoday.com/jahn-don-haitian-musician-bridging-the-gap-between-afro-rap-house-unique-flow/">Blog</Link>
        </li>
      </ul>
      <div className="app__navbar-login">
        {/* Use Link component to navigate to the login/registration page */}
        <Link to="/login">Log In / Registration</Link>
        <div className="app__navbar-divider" />
        <Link to="/shop ">Shop</Link>
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
                {/* Use Link component to navigate to the Artist Profile page */}
                <Link to="/ArtistsProfile" onClick={handleToggleMenu}>
                  Artists Profile
                </Link>
              </li>
              <li className="app__navbar-smallscreen-link">
                <Link to ="https://onerpm.link/539933473348/" onClick={handleToggleMenu}>
                  Music
                </Link>
              </li>
              <li className="app__navbar-smallscreen-link">
              <Link to ="/Event" onClick={handleToggleMenu}>
                  Event
              </Link>
              </li>
              <li className="app__navbar-smallscreen-link">
                {/* Use Link component to navigate to the Membership page */}
                <Link to="https://hiphoptoday.com/jahn-don-haitian-musician-bridging-the-gap-between-afro-rap-house-unique-flow/" onClick={handleToggleMenu}>
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
 