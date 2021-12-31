import React from 'react';
import Ratings from '../Ratings.jsx';

// pass in a number to ratings for it to render a star

const Review = ({ review }) => {
  console.log(review);
  const { reviewer_name, date, summary, body, photos, recommend, response, helpfullness } = review;
  return (
    <div>
      Review - Dynamically render each review
      <Ratings />
      {reviewer_name}
      {date}
      {summary}
      {body}
      {photos}
      {recommend}
      {response}
      {helpfullness}

    </div>
  );
};

export default Review;