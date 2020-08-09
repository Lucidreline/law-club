import React from 'react';

import './nav-bar.styles.scss';

class NavBar extends React.Component {
  constructor() {
    super();
    this.state = { open: false, linkFade: false };
  }

  openCloseHambMenu = () => {
    this.setState({ open: !this.state.open, linkFade: !this.state.linkFade });
  };

  render() {
    return (
      <nav id='nav-bar'>
        <i
          onClick={this.openCloseHambMenu}
          className='fas fa-bars hamburger'
        ></i>
        <img
          className='logo-img'
          src='https://res.cloudinary.com/dglxjd018/image/upload/c_scale,h_75/v1596574330/pls/whiteLogo_zbrutt.png'
          alt=''
        />
        <ul className={`nav-links ${this.state.open ? ' open' : ''}`}>
          <li className={`nav-link ${this.state.linkFade ? ' fade' : ''}`}>
            Events
          </li>
          <li className={`nav-link ${this.state.linkFade ? ' fade' : ''}`}>
            Members
          </li>
          <li className={`nav-link ${this.state.linkFade ? ' fade' : ''}`}>
            About Us
          </li>
          <li className={`nav-link ${this.state.linkFade ? ' fade' : ''}`}>
            Contact Us
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
