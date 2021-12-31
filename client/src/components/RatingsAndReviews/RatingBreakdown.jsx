import React from 'react';
import Ratings from '../Ratings.jsx';

const RatingBreakdown = () => {
// import average utility and render number
// pass in average ratings to ratings star renderer
// render a string to show how many reviews recommend the product
// render a bar chart of stars

  return (
    <div>
      Rating Breakdown
      <Ratings />
    </div>
  );
};

export default RatingBreakdown;