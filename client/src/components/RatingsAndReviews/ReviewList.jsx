import React from 'react';
import Review from './Review.jsx';
import NewReview from './NewReview.jsx';

// low priority - implement a keyword search
// display 2 reviews at a time
// if more than 2 reviews are written,
  // render a more reviews button (if less, no button)
  // once clicked, render 2 more additional reviews.
  // there should be a max cap in height, that once reached a scroll bar will appear to go through all reviews
    // sort and buttons should remain fixed outside of the  scroll
  // if no reviews, list should collapse, then only the new review button should appear

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewsExist: false,
      reviewsRendered: 2
    };
    this.handleSeeMoreReviews = this.handleSeeMoreReviews.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.reviews !== prevProps.reviews && this.props.reviews.length > 0) {
      this.setState({
        reviewsExist: true
      })
    }
  }

  handleSeeMoreReviews() {
    let counter = this.state.reviewsRendered
    this.setState({
      reviewsRendered: counter + 2
    })
  }

  render() {
    console.log('Reviews ', this.props.reviews);
    let list;
    if (this.state.reviewsExist === false) {
      list = <div></div>
    } else {
      list = this.props.reviews.map((review, idx) => {
        if (idx < this.state.reviewsRendered) {
          return <Review key={review.review_id}/>
        }
      })
    }

    return (
      <div>
        {list}
        <button className='buttons' onClick={this.handleSeeMoreReviews}>MORE REVIEWS</button>
        <button className='buttons'><NewReview /></button>
      </div>
    );
  }
};

export default ReviewList;