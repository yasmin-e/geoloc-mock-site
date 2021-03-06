import React from 'react';
import Logo from '../../assets/logo-geoloc-heart@3x.png';
import Button from '../../assets/btn-track@3x.png';
import Arrow from '../../assets/ic-flag-arrow-down@3x.png';
import FrenchFlag from '../../assets/france-flag.png';
import './Header.scss';

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img
          id="logo"
          src={Logo}
          alt="Geoloc Logo"
        />
      </div>
      <nav className="nav">
        <li>
          <a href="/" className="nav-link">
            Home
          </a>
        </li>
        <li>
          <a href="/" className="nav-link">
            How it Works
          </a>
        </li>
        <li>
          <a href="/" className="nav-link">
            Price
          </a>
        </li>
        <li>
          <a href="/" className="nav-link">
            FAQ
          </a>
        </li>
      </nav>
      <img
        id="track-btn"
        src={Button}
        alt="Track button pink"
      />
      <div className="language-settings">
        <img
          src={FrenchFlag}
          alt="French flag"
          id="flag"
        />
        <img
          src={Arrow}
          alt="Downward arrow symbol"
          id="arrow"
        />
      </div>
    </header>
  );
}

export default Header;
