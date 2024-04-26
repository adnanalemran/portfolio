import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
             <footer className="footer-area">
        <div className="container">
          <div className="footer-content text-center">
            <a href="index.html" className="logo">
              <img src="src/assets/images/logo.svg" alt="Logo" />
            </a>
            <ul className="footer-menu">
            <NavLink  to="/" style={{ color: "#676767" }} activeClassName="active" className="navlink">Home</NavLink>
                <NavLink to="/about" style={{ color: "#676767" }} activeClassName="active" className="navlink">About</NavLink>
                <NavLink to="/works" style={{ color: "#676767" }} activeClassName="active" className="navlink">Works</NavLink>
                <NavLink to="/blog" style={{ color: "#676767" }} activeClassName="active" className="navlink">Blog</NavLink>
                <NavLink to="/contact" style={{ color: "#676767" }} activeClassName="active" className="navlink">Contact</NavLink>
            </ul>
            <p className="copyright">
              &copy; All rights reserved by <span>Adnan al-emran </span>
            </p>
          </div>
        </div>
      </footer>
        </div>
    );
};

export default Footer;