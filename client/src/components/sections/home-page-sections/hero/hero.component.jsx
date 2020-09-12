import React from 'react';
import { Link } from 'react-router-dom';
import jump from 'jump.js';

import './hero.styles.scss';

import NavBar from '../../../nav-bar/nav-bar.component';
import Btn from '../../../btn/btn.component';
import JudgeSvg from '../../../judge-svg/judge-svg';

const Hero = () => {
  const jumpToAboutUs = () => {
    jump('#about-us', {
      offset: -30,
      duration: 2000,
    });
  };
  return (
    <section id='hero'>
      <NavBar />
      <div className='hero-content'>
        <div className='text'>
          <div className='text-content'>
            <h1 className='title'>Pre-Law Society</h1>
            <p className='subtitle'>
              Our mission is to assist students interested in pursuing a career
              in law while furthering intellectual achievement.
            </p>
            <div className='btns'>
              <Link to='contact' className='text-decoration-none'>
                <Btn className='hero-btn'>Contact Us</Btn>
              </Link>
            </div>
          </div>
        </div>
        <div className='svg-container'>
          <JudgeSvg />
        </div>
      </div>
      <div className='bottom-btn' onClick={jumpToAboutUs}>
        <span>About Us</span>
        <i class='fas fa-chevron-down'></i>
      </div>
    </section>
  );
};

export default Hero;
