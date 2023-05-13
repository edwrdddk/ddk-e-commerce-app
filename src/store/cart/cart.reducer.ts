import { AnyAction } from "redux";
import { setIsCartOpen, setCartItems } from "./cart.action";
import { CART_ACTION_TYPES, CartItem } from "./cart.types";

export type CartState = {
  readonly cartItems: CartItem[];
  readonly isCartOpen: boolean;
};

export const CART_INITIAL_STATE: CartState = {
  isCartOpen: false,
  cartItems: [],
};

export const cartReducer = (
  state = CART_INITIAL_STATE,
  action: AnyAction
): CartState => {
  if (setCartItems.match(action)) {
    return {
      ...state,
      cartItems: action.payload,
    };
  }

  if (setIsCartOpen.match(action)) {
    return {
      ...state,
      isCartOpen: action.payload,
    };
  }

  return state;
};

// JS

// import { CART_ACTION_TYPES } from "./cart.types";

// export const CART_INITIAL_STATE = {
//   isCartOpen: false,
//   cartItems: [],
// }

// export const cartReducer = (state = CART_INITIAL_STATE, action={}) => {
//   const { type, payload } = action;

//   switch (type) {
//     case CART_ACTION_TYPES.SET_CART_ITEMS:
//       return {
//         ...state,
//         cartItems: payload,
//       };
//     case CART_ACTION_TYPES.SET_IS_CART_OPEN:
//       return {
//         ...state,
//         isCartOpen: payload,
//       };
//     default:
//       return state;
//   }
// }
