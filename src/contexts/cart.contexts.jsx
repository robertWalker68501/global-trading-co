import { createContext, useState, useEffect } from 'react';

// Helper function to determine if a particular cart item already exists
const addCartItem = (cartItems, productToAdd) => {
  // check to see if cart items array already contains product to add
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === productToAdd.id
  );

  // If item is already in the cartItems array increment the quantity
  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  // Return new array with modified cartItems / new cart item
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

// Remove a cart item
const removeCartItem = (cartItems, cartItemToRemove) => {
  // Find the cart item to remove
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToRemove.id
  );

  // If quantity is equal to 1, remove item from cart
  if (existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
  }

  // Return new cartItems array with the matching cart item's reduced quantity
  return cartItems.map(cartItem =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

// Clear a cart item from cart
const clearCartItem = (cartItems, cartItemToClear) =>
  cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id);

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartCount: 0,
  cartTotal: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setCartTotal(newCartTotal);
  }, [cartItems]);

  const addItemToCart = productToAdd => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = cartItemToRemove => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove));
  };

  const clearItemFromCart = cartItemToClear => {
    setCartItems(clearCartItem(cartItems, cartItemToClear));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
    cartItems,
    cartCount,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
