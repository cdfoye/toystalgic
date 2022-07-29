import "./NavbarStyles.css"
// import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import React, {useState} from 'react';

import { FaBars, FaTimes } from "react-icons/fa";

// function Nav() {
  const Nav = () => {
    const [click, btnClick] = useState(false);
    const handleClick = () => btnClick(!click);

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <div className="loggedin">
          <ul className={click ? "navbar active" : "navbar"}>
            <li><Link to="/orderHistory" className="hvr-float">Order History</Link></li>
            <li><a href="/" onClick={() => Auth.logout()}>Logout</a></li>
          </ul>

          <div className="hamburger" onClick={handleClick}>
            {click ? (
            <FaTimes size={20} style={{ color: "black" }} />
            ) : (
            <FaBars size={20} style={{ color: "black" }} />
            )}
          </div>
        </div>
      );

    } else {
      return (
        <div className="loggedout">
          <ul className={click ? "navbar active" : "navbar"}>
            <li><Link to="/" className="hvr-float" smooth>Shop</Link></li>
            <li><Link to="/login" className="hvr-float" smooth>Login</Link></li>
            <li><Link to="/signup" className="hvr-float" smooth>Signup</Link></li>
            <li><Link to="/" className="hvr-float" smooth>About Us</Link></li>
            <li><Link to="/" className="hvr-float" smooth>Forum</Link></li>
          </ul>

          <div className="hamburger" onClick={handleClick}>
            {click ? (
            <FaTimes size={20} style={{ color: "#333" }} />
            ) : (
            <FaBars size={20} style={{ color: "C34271" }} />
            )}
          </div>
        </div>
      );
    }
  }

  return (
    <div className="nav">
    
      <Link to="/" className="hvr-bounce-in" ><h1>toystalgic</h1></Link> 
        <nav>
          {showNavigation()}
        </nav>
    </div>
  );
}

export default Nav;
