import React from 'react';

import './card-list.styles.scss';
import Card from '../card/card.component';

const CardList = ({ cards }) => {
  return (
    <div className='card-list'>
      {cards.map((card, index) => (
        <Card key={index} data={card} />
      ))}
    </div>
  );
};

export default CardList;
