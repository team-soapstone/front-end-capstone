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
      reviewsRendered: 2,
      allReviewsRendered: false,
      amountOfReviews: 0
    };
    this.handleSeeMoreReviews = this.handleSeeMoreReviews.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.reviews !== prevProps.reviews && this.props.reviews.length > 0) {
      this.setState({
        reviewsExist: true,
        amountOfReviews: this.props.reviews.length
      })
    }
  }

  handleSeeMoreReviews() {
    let counter = this.state.reviewsRendered
    if (this.state.reviewsRendered > this.props.reviews.length) {
      this.setState({
        allReviewsRendered: true
      })
    } else {
      this.setState({
        reviewsRendered: counter + 2
      })
    }
  }

  render() {
    // conditional for amount of reviews to render
    let list;
    if (this.state.reviewsExist === false) {
      list = <div></div>
    } else {
      list = this.props.reviews.map((review, idx) => {
        if (idx < this.state.reviewsRendered) {
          return <Review
            key={review.review_id}
            review={review}
          />
        }
      })
    }

    // conditional for more review button to render
    let moreReview;
    if (this.state.allReviewsRendered === false) {
      moreReview = <button className='buttons' onClick={this.handleSeeMoreReviews}>MORE REVIEWS</button>
    } else {
      moreReview = <div></div>
    }

    return (
      <div>
        <label htmlFor='sortReviews' ></label>
        {this.state.amountOfReviews} reviews, sorted by <select
            name='sortReviews'
            id='sortReviews'
            onChange={this.props.handleSort}
          >
          <option value='relevant'>relevance</option>
          <option value='helpful'>helpfulness</option>
          <option value='newest'>newest</option>
        </select>
        <div className='reviewList'>
          {list}
        </div>
        {moreReview}
        <button className='buttons'><NewReview /></button>
      </div>
    );
  }
};

export default ReviewList;