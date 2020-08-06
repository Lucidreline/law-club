import React from 'react';

import './card-list.styles.scss';
import Card from '../card/card.component';

const CardList = ({ cards }) => {
  return (
    <div className='card-list'>
      <Card image='https://res.cloudinary.com/dglxjd018/image/upload/v1596574107/pls/events/events_event_latinos_gjmqhy.png' />
      <Card image='https://res.cloudinary.com/dglxjd018/image/upload/v1596574096/pls/events/events_event_immigration_ltyaxo.png' />
    </div>
  );
};

export default CardList;
