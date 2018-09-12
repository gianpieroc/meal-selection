import React from 'react';
import './style.css';

const Header = ({ title, subtitle }) => {
  return(
    <div className="container">
      <h1 className="header-text"> { title } </h1>
      <h3 className="header-text"> { subtitle } </h3>
    </div>
  )
}

export default Header
