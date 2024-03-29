// import { useContext } from "react";
// import { CartContext } from "../../contexts/cart.context";
import { useSelector } from "react-redux";
import CheckoutItem from "../../components/checkout-item/checkout-item";
import PaymentForm from "../../components/payment-form/payment-form";
import { selectCartItems, selectCartTotal } from "../../store/cart/cart.selector";
import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from './checkout.styles';

export default function Checkout() {
  // const { cartItems, cartTotal } = useContext(CartContext);
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <Total>Total: ${cartTotal}</Total>
      <PaymentForm />
    </CheckoutContainer>
  )
}