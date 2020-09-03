import React from 'react';
import { Link } from 'react-router-dom'

import './hero.styles.scss';

import NavBar from '../../../nav-bar/nav-bar.component';
import Btn from '../../../btn/btn.component'
import JudgeSvg from '../../../judge-svg/judge-svg';

const Hero = () => {
  return (
    <section id='hero'>
      <NavBar />
      <div className="hero-content">
        <div className="text">
          <div className="text-content">
            <h1 className='title'>Pre-Law Society</h1>
            <p className='subtitle'>Paving our way into law school.</p>
            <div className="btns">
              <Link to='contact' className='text-decoration-none'>
                <Btn className='hero-btn'>Contact Us</Btn>
              </Link>
            </div>

          </div>
        </div>
        <div className="svg-container">
          <JudgeSvg />

        </div>
      </div>
    </section>
  );
};

export default Hero;
