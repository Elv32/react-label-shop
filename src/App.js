import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react'; // Import Auth0Provider
import LogoIntro from './Components/LogoIntro/LogoIntro';
import HomePage from './HomePage/HomePage';
import AboutUs from './container/AboutUs/AboutUs';
import Chef from './container/Chef/Chef';
import Chef3 from './container/Chef3/Chef3';
import Chef4 from './container/Chef4/Chef4';
import FindUs from './container/Findus/FindUs';
import Footer from './container/Footer/Footer';
import Gallery from './container/Gallery/Gallery';
import Header from './container/Header/Header';
import Intro from './container/Intro/Intro';
import SpecialMenu from './container/Menu/SpecialMenu';
import Newsletter from './Components/Footer/Newsletter';
import FooterOverlay from './Components/Footer/FooterOverlay';
import SubHeading from './Components/SubHeading/SubHeading';
import SubHeading1 from './Components/SubHeading1/SubHeading1';
import Images from './constants/images';
import Data from './constants/data';
import Navbar from './Components/Navbar/Navbar';
import Navbar2 from './Components/Navbar2/Navbar2';
import LoginForm from './Components/LoginForm/LoginForm';
import RegistrationForm from './Components/RegisttrationForm/RegistrationForm';
import ProfileArtist from './Components/ProfileArtist/ProfileArttist';
import Shop from './Components/Shop/Shop';
import Checkout from './Components/Checkout/checkout';
import MusicPage from './Components/MusicPage/MusicPage';
import Event from './Components/Event/Event'; 
import './Components/Navbar/Navbar.css';
import './Components/Navbar2/Navbar2.css';
import './container/AboutUs/AboutUs.css';
import './container/Chef/Chef.css';
import './container/Chef3/Chef3.css';
import './container/Chef4/Chef4.css';
import './container/Footer/Footer.css';
import './container/Gallery/Gallery.css';
import './container/Header/Header.css';
import './container/Intro/Intro.css';
import './container/Menu/SpecialMenu.css';
import './Components/Footer/FooterOverlay.css';
import './Components/Footer/Newsletter.css';
import './Components/SubHeading/SubHeading.css';
import './Components/SubHeading1/SubHeading1.css';
import './Components/Shop/Shop.css';
import './Components/Checkout/checkout.css';
import './Components/MusicPage/MusicPage.css';
import './Components/Event/Event.css';
import './App.css';

function App() {
  return (
      <Routes>
          <Route path="/" element={<LogoIntro />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/ArtistsProfile" element={<ProfileArtist />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/view" element={<SpecialMenu />} />
          <Route path="/chef" element={<Chef />} />
          <Route path="/viewbio" element={<Chef3 />} />
          <Route path="/Bio" element={<Chef4 />} />
          <Route path="/header" element={<Header />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/find-us" element={<FindUs />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/sub-heading" element={<SubHeading />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/footer-overlay" element={<FooterOverlay />} />
          <Route path="/data" element={<Data />} />
          <Route path="/images" element={<Images />} />
          <Route path="*" element={<Navbar />} />
          <Route path="*" element={<Navbar2 />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shoppingcart" element={<Checkout />} />
          <Route path="/Music" element={<MusicPage />} />
          <Route path="/Event" element={<Event />} />
      </Routes>
  );
}

export default App;
