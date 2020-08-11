import React from 'react';

import './card.styles.scss';

const Card = ({ image }) => {
  return (
    <div className='custom-card' style={{ backgroundImage: `url(${image})` }}>
      <div className='card-content'>
        <p>More Info</p>
      </div>
    </div>
  );
};

export default Card;
