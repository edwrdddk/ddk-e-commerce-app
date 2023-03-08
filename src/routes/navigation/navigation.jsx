import { Fragment } from "react"
import { Link, Outlet } from "react-router-dom"
import { ReactComponent as ShopLogo } from "../../assets/lshirt.svg";
import "./navigation.scss";

export default function Navigation() {
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
          <Link className="nav-link" to="/auth">
            Sing In
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}
