import React from 'react';

import './card-list.styles.scss';
import Card from '../card/card.component';

const CardList = ({ cards }) => {
  return (
    <div className='card-list'>
      {cards.map((card, index) => (
        <div data-aos='fade-up' key={index}>
          <Card data={card} />
        </div>
      ))}
    </div>
  );
};

export default CardList;
