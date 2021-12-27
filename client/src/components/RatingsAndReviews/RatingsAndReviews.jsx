import React from 'react';
import NewReview from './NewReview.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import ProductBreakdown from './ProductBreakdown.jsx';
import ReviewList from './ReviewList.jsx';

class RatingsAndReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    };
  }

  render() {
    return (
      <div>
        <RatingBreakdown />
        <ProductBreakdown />
        <ReviewList />
        <NewReview />
      </div>
    );
  }
}

export default RatingsAndReviews;