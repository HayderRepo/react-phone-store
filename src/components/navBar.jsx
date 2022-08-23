import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as BrandIcon } from "../logo.svg";
import styled from "styled-components";
import {ButtonContaier} from "./button"
class NavBar extends Component {
  state = {};
  render() {
    return (
      <NavWraper className="navbar navbar-expand-sm navbar-dark px-sm-5 bg-primary">
        {/* 
https://www.iconfinder.com/icons/1243689/call_phone_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/Makoto_msk */}
        <Link to={"/"}>
          <BrandIcon className="navbar-brand" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              Products
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContaier>
            <i className="fas fa-cart-plus mr-2">my cart</i>
          </ButtonContaier>
        </Link>
      </NavWraper>
    );
  }
}

const NavWraper = styled.nav`
    background:var(--mainBlue);
    .nav-link{
        color:var(--MainWhite) !important;
        font-size:1.3rem;
        text-transform: capitalize ;
        
    }
`



export default NavBar;
