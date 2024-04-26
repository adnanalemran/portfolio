import { NavLink } from "react-router-dom";

import "./heder.css"
const Header = () => {
  return (
    <div>
      <header className="header-area">
        <div className="container">
          <div className="gx-row d-flex align-items-center justify-content-between">
            <a href="index.html" className="logo">
              <img src="src/assets/images/logo.svg" alt="Logo" />
            </a>

            <nav className="navbar">
              <ul className="menu" >
                <a to="/">Home</a>
                <NavLink> <span> About</span></NavLink>
                <a> Works</a>
                <NavLink> Contact</NavLink>
              </ul>
              <a href="https://drive.google.com/uc?export=download&id=1ZjH1AVuZyZTlwpvipjpTUCyOu0oBGjJX" className="theme-btn"> Adnan's Resume</a>

            </nav>

            <a href="https://drive.google.com/uc?export=download&id=1ZjH1AVuZyZTlwpvipjpTUCyOu0oBGjJX" className="theme-btn">Adnan's Resume</a>

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