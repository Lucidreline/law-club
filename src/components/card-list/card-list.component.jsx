import React from 'react';

import './card-list.styles.scss';
import Card from '../card/card.component';

const CardList = ({ cards }) => {
  return (
    <div className='card-list'>
      {cards.map((card) => (
        <Card image={card.image} />
      ))}
    </div>
  );
};

export default CardList;
