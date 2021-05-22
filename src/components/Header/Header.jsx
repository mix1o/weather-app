import React from 'react';
import logo from '../../assets/logo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="header__container-logo">
        <img className="header__logo" src={logo}></img>
      </div>
      <p className="header__name">Weather App</p>
    </header>
  );
};

export default Header;
