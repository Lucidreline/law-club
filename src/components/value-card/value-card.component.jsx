import React from 'react';

import './value-card.styles.scss';

const ValueCard = ({ index, background, text, type }) => {
  return (
    <div
      className='value-card'
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className='darkness'>
        <div className='text-container'>
          <h3 className='number'>{index}</h3>
          <p className='text'>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default ValueCard;
