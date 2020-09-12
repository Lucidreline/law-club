import React from 'react';

import './value-card.styles.scss';

const ValueCard = ({ index, background, text, type }) => {
  const numOfValues = '4';
  const intro = (
    <div className='intro'>
      <div className='number-background'>
        <h2>{numOfValues}</h2>
      </div>
      <div className='text'>
        <p>{numOfValues} Values</p>
      </div>
    </div>
  );

  const item = (
    <div className='item'>
      <div className='text-container'>
        <h3 className='number'>{index}</h3>
        <p className='text'>{text}</p>
      </div>
    </div>
  );

  return (
    <div
      className='value-card'
      style={{ backgroundImage: `url(${background})` }}
    >
      {item}
    </div>
  );
};

export default ValueCard;
