import { Fragment, useContext } from "react"
import { Link, Outlet } from "react-router-dom"
import { ReactComponent as ShopLogo } from "../../assets/lshirt.svg";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase";
import "./navigation.scss";

export default function Navigation() {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  
  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  }

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
              <span className="nav-link" onClick={signOutHandler}>
                Sing Out
              </span>
            ) : (
              <Link className="nav-link" to="/auth">
                Sing In
              </Link>
            )
          }
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}
