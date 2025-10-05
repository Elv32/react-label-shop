import React, { useState, useEffect } from 'react';
import Footer from '../../container/Footer/Footer';
import Navbar2 from '../Navbar2/Navbar2';
import Introshop from '../../container/Introshop/Introshop';
import Gallery2 from '../../container/Gallery2/Gallery2';
import Chef2 from '../../container/Chef2/Chef2';
import product1Image from './product1.png';
import product2Image from './product2.png';
import product3Image from './product3.png';
import product4Image from './product4.png';
import product5Image from './product5.png';
import product6Image from './product6.png';
import product7Image from './product7.png';
import './Shop.css';
import { useCart } from '../Shop/CartContext'; 

const Shop = () => {
  const { cartDispatch } = useCart(); // Get cartDispatch from the cart context
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
  // Sample product data
  const products = [
    {
      id: 1,
      name: 'FADED SWEATSHIRT',
      price: 19.99,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: product1Image,
    },
    {
      id: 2,
      name: 'CROP FADED SWEATSHIRT',
      price: 14.99,
      description: 'Suspendisse tristique libero at hendrerit.',
      image: product2Image,
    },
    {
      id: 3,
      name: 'FLEECE-LINED HOODIE',
      price: 24.99,
      description: 'Quisque facilisis massa non leo bibendum cursus.',
      image: product3Image,
    },
    // Add more products here
  ];

  const products2 = [
    {
      id: 1,
      name: 'NYLON TRACK',
      price: 19.99,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: product4Image,
    },
    // Add more products here
  ];

  const products3 = [
    {
      id: 1,
      name: '2HONORGOD SWEATPANT',
      price: 19.99,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: product5Image,
    },
    {
      id: 2,
      name: 'OVERSIZED SWEAT SHORT',
      price: 14.99,
      description: 'Suspendisse tristique libero at hendrerit.',
      image: product6Image,
    },
    {
      id: 3,
      name: 'LEATHER PANT',
      price: 24.99,
      description: 'Quisque facilisis massa non leo bibendum cursus.',
      image: product7Image,
    },
    // Add more products here
  ];

  const addToCart = (product) => {
  
    // Dispatch the action and log the state
    cartDispatch({ type: 'ADD_TO_CART', product });
  };
  

  return (
    <div className="shop-container">
    <Navbar2 />


      <h1 className="shop-heading">Welcome to Our Shop</h1>
  {/* Header Section */}
 <div className="headers"><Introshop/>
 {showScrollDown && (
        <button className="scroll-down-button" onClick={scrollDown}>
          Scroll Down
        </button>
      )}
  </div>
  

      {/* Three Grid Product Cards */}
      <h1 className="shop-heading">Explore our collections</h1>

      <div className="product-grid row">
        {products.map((product) => (
          <div key={product.id} className="col-12 col-md-4 mb-4">
            <div className="product-card card h-100">
              <img
                src={product.image}
                alt={product.name}
                className="product-image card-img-top"
                style={{ objectFit: 'cover' }}
              />
              <div className="card-body">
                <h3 className="product-name card-title">{product.name}</h3>
                <p className="product-price">${product.price}</p>
                <a
                  href={`https://2-h-g.com/collections/shop`} // Replace this with the actual URL
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Product
                </a>
              </div>
              
            </div>
          </div>
        ))}
      </div>

      {/* Two Lists of Product Cards */}
      <h1 className="shop-heading">What 2HONORGOD is about?</h1>
     <Chef2/>
      <h1 className="shop-heading">2HONORGOD</h1>
      <div className="product-list">
        {products2.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
              style={{ objectFit: 'cover' }}
            />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">${product.price}</p>
            <a
                  href={`https://2-h-g.com/products/track-suit`} // Replace this with the actual URL
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Product
                </a>
          </div>
        ))}
      </div>
     
      <h1 className="shop-heading">IN STOCK PRODUCTS</h1>
      <div className="product-grid">
        {products3.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">${product.price}</p>
            <a
                  href={`https://2-h-g.com/collections/shop?filter.v.availability=1`} // Replace this with the actual URL
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Product
                </a>

            
          </div>
        ))}
      </div>
      <Gallery2/>
      {showScrollUp && (
          <button className="scroll-up-button" onClick={scrollToTop}>
            Scroll Up
          </button>
        )}

      <Footer />
    </div>
  );
};

export default Shop;
