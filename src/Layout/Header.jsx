

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
              <ul className="menu">
                <li className="active"><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="works.html">Works</a></li>
                <li><a href="contact.html">Contact</a></li>
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