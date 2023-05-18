// import { useContext } from "react";
// import { CartContext } from "../../contexts/cart.context";
import { useDispatch, useSelector } from "react-redux";
import { setIsCartOpen } from "../../store/cart/cart.action";
import { selectIsCartOpen, selectCartCount, } from "../../store/cart/cart.selector"
import { CartIconContainer, ItemCount } from "./cart-icon.styles";
import { ReactComponent as ShoppingSvg } from "../../assets/shopping-bag.svg";

export default function CartIcon() {
  // const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);
  

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingSvg />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};