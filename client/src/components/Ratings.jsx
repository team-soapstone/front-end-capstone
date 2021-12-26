import React from 'react';

const Ratings = ({ productRatings }) => {
  const defaultRatings = { 0: '0', 1: '0', 2: '0', 3: '0', 4: '1', 5: '1'};
  // == EDGE CASES == Do not change order
  // if product ratings object is undefined
  if (productRatings === undefined) {
    productRatings = defaultRatings;
  // if product ratings object has no properties or values
  } else if (Object.values(productRatings).length === 0) {
    productRatings = defaultRatings;
  // if product ratings has properties, but total ratings count is 0
  } else if (Object.values(productRatings).reduce((init, current) => { return init + current; }) === 0) {
    productRatings = defaultRatings;
  }

  const ratingAverage = (productRatings) => {
    let numerator = 0;
    let denominator = 0;
    for (let star in productRatings) {
      numerator += Number(star) * Number(productRatings[star]);
      denominator += Number(productRatings[star]);
    }
    const number = numerator / denominator;
    return ((Math.round(number * 4) / 4).toFixed(2));
  };

  const starRenderer = (rating = 5) => {
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
      emptyStars -= 1;
    }

    // if filledStars is 0, .map will break
    const filledStarsRender = [...Array(filledStars)].map((star, idx) => {
      return (<span className='star' key={idx}>&#x2605;</span>)
    })
    const partialStyle = {
      '--width': partialStar
    };
    // if emptyStars is 0, .map will break
    const emptyStarRender = [...Array(emptyStars)].map((star, idx) => {
      return (<span className='star' key={idx}>&#x2606;</span>)
    })
    return (
      <div data-testid='avg'>
        {filledStarsRender}
        <span className='partialStar' style={partialStyle}>&#x2606;</span>
        {emptyStarRender}
      </div>
    );
  }

  return starRenderer(ratingAverage(productRatings));
};

export default Ratings;