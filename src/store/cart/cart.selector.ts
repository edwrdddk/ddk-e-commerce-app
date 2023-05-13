import { createSelector } from 'reselect';
import { CartState } from './cart.reducer';

const selectCartReducer = (state): CartState => state.cart;

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartOpen
);

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.price,
    0
  )
);

export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
);

// import { createSelector } from "reselect";

// const selectCartReducer = state => state.cart;  //getting the slice.

// export const selectCartItems = createSelector(
//   [selectCartReducer],
//   (cart) => cart.CartItems
// );

// export const selectIsCartOpen = createSelector(
//   [selectCartReducer],
//   (cart) => cart.isCartOpen
// );

// export const selectCartCount = createSelector(
//   [selectCartItems],
//   (cartItems) => cartItems.reduce(
//     (total, cartItem) => total + cartItem.quantity,
//     0
//   )
// );

// export const selectCartTotal = createSelector(
//   [selectCartItems],
//   (cartItems) => cartItems.reduce(
//     (total, cartItem) => total + cartItem.quantity * cartItem.price,
//     0
//   )
// );

// const newCartCount = CartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);

// const newCartTotal = CartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0);