import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPES } from "./cart.types";

const addCartItem = (cartItems, productToAdd) => {
  // Find if cartItems contains productToAdd
  const exsistingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  // If found, increment quantity.
  if (exsistingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 } //here if the match is found, I am spreading through all the old properties of this cardItem, exept I am adding one to quantity.
        : cartItem
    );
  }

  // Return new array with modified cartItems/ new cart item.
  return [...cartItems, { ...productToAdd, quantity: 1 }];
}

const removeCartItem = (cartItems, cartItemToRemove) => {
  //find the cart  item to remove.
  const exsistingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  //chech if quantity is equal to 1, if so remove that item from the cart.
  if (exsistingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
  }
  //rteurn back cart items with matching cart item with reduced quantity.
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 } //here if the match is found, I am spreading through all the old properties of this cardItem, exept I am adding one to quantity.
      : cartItem
  );
}

const clearCartItem = (cartItems, cartItemToClear) => {
  return cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id);
}

export const setIsCartOpen = (boolean) => createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const newCartItems = removeCartItem(cartItems, cartItemToRemove);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const clearItemFromCart = (cartItems, cartItemToClear) => {
  const newCartItems = clearCartItem(cartItems, cartItemToClear);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};