import React from 'react';
import axios from 'axios';
import Review from './Review.jsx';
import NewReview from './NewReview.jsx';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewsExist: false,
      reviewsRendered: 2,
      allReviewsRendered: false,
      amountOfReviews: 0,
      reviewModalVisbility: false
    };
    this.handleSeeMoreReviews = this.handleSeeMoreReviews.bind(this);
    this.handleOpenReviewModal = this.handleOpenReviewModal.bind(this);
    this.handleCloseReviewModal = this.handleCloseReviewModal.bind(this);
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

  handleOpenReviewModal() {
    this.setState({
      reviewModalVisbility: true
    })
  }

  handleCloseReviewModal() {
    this.setState({
      reviewModalVisbility: false
    })
  }

  render() {
    const { currentProduct, productRatings, handleGetReviews } = this.props;
    // conditional for amount of reviews to render
    let list;
    if (this.state.reviewsExist !== false) {
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
    if (this.state.allReviewsRendered === false && this.state.amountOfReviews > 2) {
      moreReview = <button
        className='buttons'
        id='moreReview'
        onClick={this.handleSeeMoreReviews}
      >MORE REVIEWS</button>
    }

    return (

      <div className='reviewContainer'>
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
        <button
          className='buttons'
          onClick={this.handleOpenReviewModal}
          >
          ADD A REVIEW +
        </button>
        {this.state.reviewModalVisbility ?
          <NewReview
            currentProduct={currentProduct}
            productRatings={productRatings}
            handleGetReviews={handleGetReviews}
            handleClose={this.handleCloseReviewModal}
            visible={this.state.reviewModalVisbility}/> :
          <div></div>}
      </div>
    );
  }
};

export default ReviewList;