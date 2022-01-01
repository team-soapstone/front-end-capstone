import React from 'react';
import Ratings from '../Ratings.jsx';

// pass in a number to ratings for it to render a star

const Review = () => {

  return (
    <div>
      <div>
        Review - Dynamically render each review
        <Ratings />
      </div>
    </div>
  );
};

export default Review;