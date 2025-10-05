import React, { createContext, useContext, useReducer } from 'react';

// Define the initial cart state
const initialState = {
  cart: [],
};

// Define cart actions
const cartActions = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART',
};

// Create a cart reducer function
const cartReducer = (state, action) => {
  switch (action.type) {
    case cartActions.ADD_TO_CART:
      // Check if the product is already in the cart
      const existingProduct = state.cart.find((item) => item.id === action.product.id);
      if (existingProduct) {
        // If yes, increase the quantity
        existingProduct.quantity += 1;
        return { ...state };
      } else {
        // If not, add it to the cart
        const newProduct = { ...action.product, quantity: 1 };
        return { ...state, cart: [...state.cart, newProduct] };
      }

    case cartActions.REMOVE_FROM_CART:
      // Remove the product from the cart
      const updatedCart = state.cart.filter((item) => item.id !== action.productId);
      return { ...state, cart: updatedCart };

    case cartActions.CLEAR_CART:
      // Clear the entire cart
      return { ...state, cart: [] };

    default:
      return state;
  }
};

// Create the CartContext
const CartContext = createContext();

// Create a CartProvider component to wrap your app
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ cartState: state, cartDispatch: dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to access cart state and dispatch
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
