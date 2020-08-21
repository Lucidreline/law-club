import React from 'react';

import './card-list.styles.scss';
import Card from '../card/card.component';



const CardList = ({ cards }) => {
  return (
    <div className='card-list'>
      {cards.map((card, index) => (
        <div data-aos='fade-up'>
          <Card key={index} data={card} />
        </div>
      ))}
    </div>
  );
};

export default CardList;
