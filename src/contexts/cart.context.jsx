import { createContext, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  // Find if cartItems contains productToAdd
  const exsistingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  // If found, increment quantity.
  if (exsistingCartItem) {
    return cartItems.map((cartItem) => 
    cartItem.id === productToAdd.id 
    ? {...cartItem, quantity: cartItem.quantity + 1} //here if the match is found, I am spreading through all the old properties of this cardItem, exept I am adding one to quantity.
    : cartItem
    );
  }

  // Return new array with modified cartItems/ new cart item.
  return [...cartItems, { ...productToAdd, quantity: 1 }];
}

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => { },
  cartItems: [],
  addItemToCart: () => { }
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  }

  const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems };

  return (<CartContext.Provider value={value}>{children}</CartContext.Provider>);
} 