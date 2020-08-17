import React from 'react';

import './nav-bar.styles.scss';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor() {
    super();
    this.state = { open: false, linkFade: false };
  }

  openCloseHambMenu = () => {
    this.setState(
      { open: !this.state.open, linkFade: !this.state.linkFade },
      () => {
        // i dont want the user to scroll while in the nav screen
        const body = document.body
        if (this.state.open) {

          body.style.overflowY = 'hidden';
          body.style.position = 'fixed';
          body.style.width = '100%';


        } else {
          body.style.overflowY = 'scroll';
          body.style.position = 'relative';
        }
      }
    );
  };

  handleLinkClicked = () => {
    console.log('here')
    document.querySelector('body').style.overflowY = 'scroll';
    document.querySelector('body').style.position = 'relative';
  }

  render() {
    const url = window.location.href;
    return (
      <nav id='nav-bar'>
        <i
          onClick={this.openCloseHambMenu}
          className='fas fa-bars hamburger'
        ></i>

        <Link to='/home' >
          <img
            className='logo-img'
            src='https://res.cloudinary.com/dglxjd018/image/upload/c_scale,h_75/v1596574330/pls/whiteLogo_zbrutt.png'
            alt=''
          />
        </Link>
        {/* this looks messy but essentially the nav links are list items. 
        They get a 'fade' class name when the nav screen is open and a 'active'
         class name when the link is open */}

        {/* When you want to add another nav link, make sure to: 
            1. Edit the break point to when the hamburger icon shows up on the media query (./nav-bar.styles.scss)
            2. Add an extra key frame animation delay (./nav-bar.styles.scss)
            3. Add the new router to /src/app.js
         
         */}
        <ul className={`nav-links ${this.state.open ? ' open' : ''}`}>
          <li
            className={`nav-link ${this.state.linkFade ? ' fade' : ''} ${url.includes('/home') ? 'active' : ''
              }`}
          >
            <Link to='/home' >Home</Link>
          </li>
          <li
            className={`nav-link ${this.state.linkFade ? ' fade' : ''} ${url.includes('/events') ? 'active' : ''
              }`}
          >
            <Link to='/events' >Events</Link>
          </li>
          <li
            onClick={this.handleLinkClicked}
            className={`nav-link ${this.state.linkFade ? ' fade' : ''} ${url.includes('/members') ? 'active' : ''
              }`}
          >
            <Link to='/members' >Members</Link>
          </li>
          <li
            className={`nav-link ${this.state.linkFade ? ' fade' : ''} ${url.includes('/about') ? 'active' : ''
              }`}
          >
            <Link to='/about' >About Us</Link>
          </li>
          <li
            className={`nav-link ${this.state.linkFade ? ' fade' : ''} ${url.includes('/contact') ? 'active' : ''
              }`}
          >
            <Link to='/contact' >Contact Us</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
