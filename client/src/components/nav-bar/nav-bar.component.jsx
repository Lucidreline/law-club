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
        const hamburger = document.getElementById('hamburgerNavIcon')
        if (this.state.open) {

          body.style.overflowY = 'hidden';
          body.style.position = 'fixed';
          body.style.width = '100%';
          hamburger.style.color = 'white'


        } else {
          body.style.overflowY = 'scroll';
          body.style.position = 'relative';
          hamburger.style.color = 'black'
        }
      }
    );
  };

  handleLinkClicked = () => {
    const body = document.body
    body.style.overflowY = 'scroll';
    body.style.position = 'relative';
  }

  render() {
    const url = window.location.href;
    return (
      <nav id='nav-bar'>
        <i
          onClick={this.openCloseHambMenu}
          id='hamburgerNavIcon'
          className={`fas fa-bars hamburger`}
        ></i>

        <Link to='/home' >
          <img
            onClick={this.handleLinkClicked}
            className='logo-img'
            src='https://res.cloudinary.com/dglxjd018/image/upload/v1598306209/PreLawSociety/Logo_ncdl1d.png'
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
            onClick={this.handleLinkClicked}
            className={`nav-link ${this.state.linkFade ? ' fade' : ''} ${url.includes('/home') ? 'active' : ''
              }`}
          >
            <Link to='/home' >Home</Link>
          </li>
          <li
            onClick={this.handleLinkClicked}
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
            onClick={this.handleLinkClicked}
            className={`nav-link ${this.state.linkFade ? ' fade' : ''} ${url.includes('/about') ? 'active' : ''
              }`}
          >
            <Link to='/about' >About Us</Link>
          </li>
          <li
            onClick={this.handleLinkClicked}
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
