import React from 'react';

import './nav-bar.styles.scss';

const NavBar = () => {
  return (
    <div id='nav-bar'>
      <div className='logo-container'>
        <h5 className='logo-text'>CSUDH Pre Law Society</h5>
        <img
          className='logo-img'
          src='https://res.cloudinary.com/dglxjd018/image/upload/c_scale,h_75/v1596574330/pls/whiteLogo_zbrutt.png'
          alt='logo'
        />
      </div>
      <div className='links-container'>
        <button className='header-btn clickable-color color-hover'>
          Events
        </button>
        <button className='header-btn clickable-color color-hover'>
          Members
        </button>
        <button className='header-btn clickable-color color-hover'>
          About Us
        </button>
        <button className='header-btn clickable-color color-hover'>
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default NavBar;
