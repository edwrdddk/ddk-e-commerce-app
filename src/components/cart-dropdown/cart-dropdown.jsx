import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context"; 
import Button from "../button/button";
import CartItem from "../cart-item/cart-item";
import {CartDropdownContainer, EmptyMessage, CartItems} from "./cart-dropdown.styles";
 
export default function CartDropdown() {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckOutHandler = () => {
    navigate("/checkout");
  }

  return (
    <CartDropdownContainer>
      <CartItems>
      {
        cartItems.length ? (cartItems.map((item) => (
        <CartItem key={item.id} cartItem={item} />
      ))) : (
        <EmptyMessage>Your cart is empty</EmptyMessage>
      )
      }
      </CartItems>
      <Button onClick={goToCheckOutHandler}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  )
}