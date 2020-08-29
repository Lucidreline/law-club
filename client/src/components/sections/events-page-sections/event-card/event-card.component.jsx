import React from 'react';

const EventCard = ({ event }) => {
  const { name } = event;
  return (
    <div>
      <h2>{name}</h2>
    </div>
  );
};

export default EventCard;