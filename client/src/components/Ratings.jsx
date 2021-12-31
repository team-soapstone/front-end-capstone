import React from 'react';
// change ratings function to render stars based on a number from 0-5.
// pull out utility function to calculate average.
const Ratings = ({ productRatings }) => {
  let ratingAverage = (productRatings) => {
    let numerator = 0;
    let denominator = 0;
    for (let star in productRatings) {
      numerator += Number(star) * Number(productRatings[star]);
      denominator += Number(productRatings[star]);
    }
    let number = numerator / denominator;
    return ((Math.round(number * 4) / 4).toFixed(2));
  };

  return (
    <div data-testid='avg'>
      <span className="star">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
      {ratingAverage(productRatings)}
    </div>
  );
};

export default Ratings;