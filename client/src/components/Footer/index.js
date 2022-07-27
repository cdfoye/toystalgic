import React from "react";
// import Auth from "../../utils/auth";
// import { Link } from "react-router-dom";
import "./FooterStyles.css"; 

import { FaHome, FaPhone, FaMailBulk, FaFacebookSquare, FaInstagram, FaPinterest, FaTwitter, FaCcVisa, FaCcMastercard, FaCcPaypal, FaCcAmex, FaCcDiscover } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer flex-row">
            <div className="footer-container">
                
            <div className="social">
                    <h4>Social Media </h4>
                    <p>Visit Us on your favorite social media site for our current events.</p>
                        <div className="socialIcon">
                            <a href="/" target="_blank" rel="noreferrer">
                                <FaFacebookSquare size={36} style={{ color: "#4267B2", marginRight: ".75rem" }} />
                            </a>
                            <a href="/" target="_blank" rel="noreferrer">
                                <FaInstagram size={36} style={{ color: "#E1306C", marginRight: ".75rem" }} />
                            </a>
                            <a href="/" target="_blank" rel="noreferrer">
                                <FaTwitter size={36} style={{ color: "#1DA1F2", marginRight: ".75rem" }} />
                            </a>
                            <a href="/" target="_blank" rel="noreferrer">
                                <FaPinterest size={36} style={{ color: "#E60023", marginRight: ".75rem" }} />
                            </a>
                        </div>
                </div>

                <div className="navigation">
                    <h4>Navigation </h4>
                    <div className="nav-container">
                        <div className="navigation-left">
                            <p><a href="/">About Us</a></p>
                            <p><a href="/">Buzzfeed Quiz</a></p>
                            <p><a href="/">Collector's Forum</a></p>
                            <p><a href="/">Return Policy</a></p>
                        </div>
                        <div className="navigation-right">
                            <p><a href="/">Signup</a></p>
                            <p><a href="/">Login</a></p>
                            <p><a href="/">Shop</a></p>
                            <p><a href="/">Cart/Checkout</a></p>
                        </div>
                    </div>
                </div>

                <div className="contactInfo">
                    <h4>Contact Us </h4>
                    <div className="location">
                        <FaHome size={18} style={{ color: "white", marginRight: "1rem" }} /><p>Denver, Colorado</p>
                    </div>
                    <div className="phone">
                        <FaPhone size={18} style={{ color: "white", marginRight: "1rem" }} /><p>(303) 555-5555</p>
                    </div>
                    <div className="email">
                        <FaMailBulk size={18} style={{ color: "white", marginRight: "1rem" }} /><p>info@toys.com</p>
                    </div>
                    <div className="ccIcons">
                        <FaCcVisa size={28} style={{ color: "#1A1F71", marginRight: "1rem" }} />
                        <FaCcMastercard size={28} style={{ color: "#F79E1B", marginRight: "1rem" }} />
                        <FaCcPaypal size={28} style={{ color: "white", marginRight: "1rem" }} />
                        <FaCcAmex size={28} style={{ color: "#2E77BB", marginRight: "1rem" }} />
                        <FaCcDiscover size={28} style={{ color: "#E55C20", marginRight: "1rem" }} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer;
