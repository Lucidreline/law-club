import React from 'react';

import './about-card.styles.scss';

const AboutCard = ({ title, text }) => {
  return (
    <div className='about-card'>
      <h2 className='card-title'>{title}</h2>
      <p className='info'>{text}</p>
    </div>
  );
};

export default AboutCard;
