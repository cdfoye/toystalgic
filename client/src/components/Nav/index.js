import "./NavbarStyles.css";
// import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import React, { useState } from "react";

import { FaBars, FaTimes } from "react-icons/fa";
import { MdOutlineForum } from "react-icons/md";

// function Nav() {
const Nav = () => {
  const [click, btnClick] = useState(false);
  const handleClick = () => btnClick(!click);

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <div className="loggedin">
          <ul className={click ? "navbar active" : "navbar"}>
            <li>
              <Link to="/orderHistory" className="hvr-li-float">
                Order History
              </Link>
            </li>
            <li>
              <Link to="/forum" className="hvr-li-float" smooth>
                Forum{" "}
                <MdOutlineForum
                  size={18}
                  style={{ color: "#black", marginRight: ".2rem" }}
                />
              </Link>
            </li>
            <li>
              <a
                href="/"
                className="hvr-li-float"
                onClick={() => Auth.logout()}
              >
                Logout
              </a>
            </li>
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
            <li>
              <Link to="/" className="hvr-li-float" smooth>
                Shop
              </Link>
            </li>
            <li>
              <Link to="/login" className="hvr-li-float" smooth>
                Login
              </Link>
            </li>
            <li>
              <Link to="/signup" className="hvr-li-float" smooth>
                Signup
              </Link>
            </li>
            <li>
              <Link to="/" className="hvr-li-float" smooth>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/forum" className="hvr-li-float" smooth>
                Forum{" "}
                <MdOutlineForum
                  size={18}
                  style={{ color: "#black", marginRight: ".2rem" }}
                />
              </Link>
            </li>
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
      <Link to="/" className="hvr-logo-bounce-in">
        <h1>toystalgic</h1>
      </Link>
      <nav>{showNavigation()}</nav>
    </div>
  );
};

export default Nav;
