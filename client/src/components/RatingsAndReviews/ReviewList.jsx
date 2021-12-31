import React from 'react';
import Review from './Review.jsx';

// low priority - implement a keyword search
// display 2 reviews at a time
// if more than 2 reviews are written,
  // render a more reviews button (if less, no button)
  // once clicked, render 2 more additional reviews.
  // there should be a max cap in height, that once reached a scroll bar will appear to go through all reviews
    // sort and buttons should remain fixed outside of the  scroll
  // if no reviews, list should collapse, then only the new review button should appear

const ReviewList = ({ reviews }) => {
  console.log('Reviews ', reviews);
  return (
    <div>
      ReviewList
      <Review />
    </div>
  );
};

export default ReviewList;