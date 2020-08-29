import React from 'react';

const EventCard = ({ event }) => {
  const { name, image } = event;

  const photoSide =
    <div className="photo-side">

    </div>

  const descriptionSide =
    <div className="description-side">

    </div>


  return (
    <div>

      <h2>{name}</h2>
    </div>
  );
};

export default EventCard;