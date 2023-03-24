import { Fragment, useContext } from "react"
import { Link, Outlet } from "react-router-dom"
import { ReactComponent as ShopLogo } from "../../assets/lshirt.svg";
import CartIcon from "../../components/cart-icon/cart-icon";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import { signOutUser } from "../../utils/firebase/firebase";
import { NavigationContainer, LogoContainer, Logo, NavLinks, NavLink } from "./navigation.styles";

export default function Navigation() {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <Logo />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">
            Shop
          </NavLink>
          {
            currentUser ? (
              <NavLink as='span' onClick={signOutUser}>
                Sing Out
              </NavLink>
            ) : (
              <NavLink to="/auth">
                Sing In
              </NavLink>
            )
          }
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  )
}


