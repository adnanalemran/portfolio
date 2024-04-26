import { Link, NavLink } from "react-router-dom";

import "./heder.css"
const Header = () => {
  return (
    <div>
      <header className="header-area">
        <div className="container">
          <div className="gx-row d-flex align-items-center justify-content-between">
            <Link to="/" className="logo">
              <img src="src/assets/images/logo.svg" alt="Logo" />
            </Link>

            <nav className="navbar">
              <ul className="menu">
                <NavLink  to="/" style={{ color: "#676767" }} activeClassName="active" className="navlink">Home</NavLink>
                <NavLink to="/about" style={{ color: "#676767" }} activeClassName="active" className="navlink">About</NavLink>
                <NavLink to="/works" style={{ color: "#676767" }} activeClassName="active" className="navlink">Projects</NavLink>
                <NavLink to="/contact" style={{ color: "#676767" }} activeClassName="active" className="navlink">Contact</NavLink>
              </ul>


              <a href="https://drive.google.com/uc?export=download&id=1ZjH1AVuZyZTlwpvipjpTUCyOu0oBGjJX" className="theme-btn"> Adnans Resume</a>

            </nav>

            <a href="https://drive.google.com/uc?export=download&id=1ZjH1AVuZyZTlwpvipjpTUCyOu0oBGjJX" className="theme-btn">Adnans Resume</a>

            <div className="show-menu">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;