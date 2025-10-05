// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { CartProvider } from './Components/Shop/CartContext';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <Router>
        <App />
      </Router>
    </CartProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
