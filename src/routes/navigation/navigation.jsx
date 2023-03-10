import { Fragment, useContext } from "react"
import { Link, Outlet } from "react-router-dom"
import { ReactComponent as ShopLogo } from "../../assets/lshirt.svg";
import CartIcon from "../../components/cart-icon/cart-icon";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context"; 
import { signOutUser } from "../../utils/firebase/firebase";
import "./navigation.scss";

export default function Navigation() {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <ShopLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          {
            currentUser ? (
              <span className="nav-link" onClick={signOutUser}>
                Sing Out
              </span>
            ) : (
              <Link className="nav-link" to="/auth">
                Sing In
              </Link>
            )
          }
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  )
}
