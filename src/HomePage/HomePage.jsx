import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar/Navbar'; // Update the import statement like this
import Header from '../container/Header/Header';
import AboutUs from '../container/AboutUs/AboutUs';
import SpecialMenu from '../container/Menu/SpecialMenu';
import Chef from '../container/Chef/Chef';
import Intro from '../container/Intro/Intro';
import Gallery from '../container/Gallery/Gallery';
import FindUs from '../container/Findus/FindUs';
import Footer from '../container/Footer/Footer';
import { fetchHomePageData } from '../api'; // Import the API function

const HomePage = () => {
  const [homePageData, setHomePageData] = useState([]);

  useEffect(() => {
    // Call the fetchHomePageData function to fetch data from the backend
    fetchHomePageData()
      .then((data) => {
        setHomePageData(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs data={homePageData.aboutUs} />
      <SpecialMenu data={homePageData.specialMenu} />
      <Chef data={homePageData.chef} />
      <Intro data={homePageData.intro} />
      <Gallery data={homePageData.gallery} />
      <FindUs data={homePageData.contact} />
      <Footer data={homePageData.footer} />
    </div>
  );
};

export default HomePage;


