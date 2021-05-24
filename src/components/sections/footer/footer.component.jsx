import React from 'react';
import { Link } from 'react-router-dom';

import './footer.styles.scss';

import linksAndContactInfo from '../../../data/linksAndContactInfo.data';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className='footer-container'>
      <div className='white-margin'></div>
      <div id='footer'>
        <div className='footer-container'>
          <div className='footer-collumns'>
            <div className='collumn intro'>
              <h3>Pre-Law Society</h3>
              <span className='mission'>Paving our way into law school!</span>
            </div>
            <div className='collumn explore'>
              <span className='small-bold'>Explore</span>
              <Link to='/home' className='link-item'>
                Home
              </Link>
              <Link to='/events' className='link-item'>
                Events
              </Link>
              <Link to='/members' className='link-item'>
                Members
              </Link>
              <Link to='contact' className='link-item'>
                Contact Us
              </Link>
            </div>

            <div className='collumn visit'>
              <span className='small-bold'>Visit</span>
              <a
                className='link-item text-decoration-none'
                href={linksAndContactInfo.toroLink}
                target='_blank'
                rel='noopener noreferrer'
              >
                Toro Link
              </a>
            </div>

            <div className='collumn follow'>
              <span className='small-bold'>Follow</span>
              <a
                className='link-item text-decoration-none'
                href={linksAndContactInfo.instagram}
                target='_blank'
                rel='noopener noreferrer'
              >
                Instagram
              </a>
              <a
                className='link-item text-decoration-none'
                href={linksAndContactInfo.facebook}
                target='_blank'
                rel='noopener noreferrer'
              >
                Facebook
              </a>
              <a
                className='link-item text-decoration-none'
                href={linksAndContactInfo.twitter}
                target='_blank'
                rel='noopener noreferrer'
              >
                Twitter
              </a>
            </div>
            <div className='collumn contact'>
              <span className='small-bold'>Contact</span>
              <a
                className='link-item text-decoration-none'
                href={`mailto: ${linksAndContactInfo.email}`}
                target='_blank'
                rel='noopener noreferrer'
              >
                {linksAndContactInfo.email}
              </a>
              <p className='phone-number'>{linksAndContactInfo.phoneNumber}</p>
            </div>
          </div>
          <p className='copyright'>
            Developed by{' '}
            <a
              className='developer-link text-decoration-none'
              href='https://manuelc.me'
              target='_blank'
              rel='noopener noreferrer'
            >
              Manuel Castaneda
            </a>
            .
          </p>
          <p className='copyright'>
            &#169; {year} Pre-Law Society. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
