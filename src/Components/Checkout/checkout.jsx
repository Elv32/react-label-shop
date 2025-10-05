import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../Shop/CartContext';
import './checkout.css'; // Assuming you have a CSS file for styling

const Checkout = () => {
  const { cartState } = useCart(); // Use cartState to get the current state of the cart
  const [scrollY, setScrollY] = useState(0);
  const [isCheckoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [orderSummary, setOrderSummary] = useState(null);

  const handleCheckout = () => {
    // Implement your checkout logic here
    // For demonstration purposes, let's just create a simple order summary
    const cartItems = cartState.cart || [];
    const totalAmount = cartItems.reduce((total, item) => total + item.product.price, 0);

    const summary = {
      items: cartItems,
      totalAmount: totalAmount.toFixed(2),
    };

    setOrderSummary(summary);
    setCheckoutModalOpen(true);
  };

  const handleCloseModal = () => {
    setCheckoutModalOpen(false);
    setOrderSummary(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const handleButtonClick = () => {
    // Navigate to the specified URL when the button is clicked
    window.location.href = 'https://2-h-g.com/cart';
  };
  return (
    <div>
      {/* Checkout Button */}
      <div className="checkout-button-container">
      <button onClick={handleButtonClick} className="checkout-button btn btn-primary">
          Checkout
        </button>
      </div>

      {/* Checkout Modal */}
      {isCheckoutModalOpen && (
        <div className="checkout-modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <h2>Order Summary</h2>
            {orderSummary && (
              <div>
                <h3>Total Amount: ${orderSummary.totalAmount}</h3>
                <ul>
                  {orderSummary.items.map((item, index) => (
                    <li key={index}>
                      <div className="checkout-item">
                        <img
                          src={item.product.image} // Assuming the product object has an 'image' property
                          alt={item.product.name}
                          className="checkout-item-image"
                        />
                        <div className="checkout-item-details">
                          <p>{item.product.name}</p>
                          <p>${item.product.price.toFixed(2)}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
