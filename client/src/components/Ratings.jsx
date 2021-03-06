import React from 'react';

const Ratings = ({ rating }) => {
  // EDGE CASES
  if (typeof rating !== 'number') {
    rating = 0
  } else if (rating < 0 || rating > 5) {
    rating = 0
  }
  rating = Number(rating);
  let filledStars = Math.floor(rating);
  let emptyStars = 5 - Math.ceil(rating);
  let partialStar = rating - filledStars;
  if (partialStar === 0.25) {
    partialStar = '40%';
  } else if (partialStar === 0.5) {
    partialStar = '50%'
  } else if (partialStar === 0.75) {
    partialStar = '60%'
  } else {
    partialStar = '0'
    emptyStars !== 0 ? emptyStars -= 1 : null;
  }
  const filledStarsRender = [...Array(filledStars)].map((star, idx) => {
    return (<span className='star' key={idx}>&#x2605;</span>)
  })
  const partialStyle = {
    '--width': partialStar
  };
  let partialStarRender;
  if (filledStars !== 5) {
    partialStarRender = <span className='partialStar' style={partialStyle}>&#x2606;</span>
  }
  const emptyStarRender = [...Array(emptyStars)].map((star, idx) => {
    return (<span className='star' key={idx}>&#x2606;</span>)
  })
  return (
    <div>
      {filledStarsRender}
      {partialStarRender}
      {emptyStarRender}
    </div>
  );
};

export default Ratings;