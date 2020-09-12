import React from 'react';

import './about-card.styles.scss'

const AboutCard = ({ title, paragraphs }) => {
  return (
    <div className='about-card'>
      <h2 className='card-title'>{title}</h2>
      {paragraphs.map((paragraph, index) => (
        <p className="info" key={index}>{paragraph}</p>
      ))}
    </div>
  );
};

export default AboutCard;