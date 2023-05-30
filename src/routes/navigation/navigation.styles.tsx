import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as ShopLogo } from "../../assets/lshirt.svg";

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  // margin-top: 5px;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px 5px;
    margin-bottom: 10px;
  }
`

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
  position: relative;

  @media screen and (max-width: 800px) {
    height: 50px;
    padding: 0px;
    margin-left: 2px;
  }
`

export const Logo = styled(ShopLogo)`
  height: 50px;
  width: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-left: 4px;
`

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 4px;

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`

export const NavLink  = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`

