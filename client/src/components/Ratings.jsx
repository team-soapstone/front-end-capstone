import React from 'react';


const Ratings = ({ productRatings }) => {
  let ratingAverage = (productRatings) => {
    let numerator = 0;
    let denominator = 0;
    for (let star in productRatings) {
      numerator += Number(star) * Number(productRatings[star]);
      denominator += Number(productRatings[star]);
    } 
    let number = numerator / denominator;
    console.log(number);
    return ((Math.round(number * 4) / 4).toFixed(2));
  }
  
  return (
    <div>
      <span className="star">&#9733;&#9733;&#9733;&#9733;&#9733;</span>        
      {ratingAverage(productRatings)}
    </div>
  );
}

export default Ratings;