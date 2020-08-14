import React from 'react';

import './board-member-card.styles.scss'

const BoardMemberCard = ({ boardMember, index }) => {
  const photoSide =
    <div className='photo-side'>
      <div className="position-container header-containers">
        <h3>{boardMember.position}</h3>
      </div>
      <div className="photo" style={{ backgroundImage: `url(${boardMember.image})` }} ></div>

    </div>
  const bioSide =
    <div className='bio-side'>
      <div className="name-container header-containers">
        <h3 className='name'>{boardMember.firstName} {boardMember.lastName}</h3>
      </div>
      <div className="bio-container ">
        <p className="bio">{boardMember.bio} <br /> <br /> <span className='fun-fact'>  Fun Fact:</span>  {boardMember.funFact}</p>
      </div>
    </div>

  let correctOrder;
  if (index % 2 === 0) {
    correctOrder = <div className='left board-member-card-container'>
      {photoSide}
      {bioSide}
    </div>
  } else {
    correctOrder = <div className='right board-member-card-container'>
      {bioSide}

      {photoSide}
    </div>
  }
  return (
    <div className='board-member-card'>
      {correctOrder}
    </div>

  );
};

export default BoardMemberCard;