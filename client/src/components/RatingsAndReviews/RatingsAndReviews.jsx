import React from 'react';
import axios from 'axios';
import API_KEY from '../../../../config.js';

import RatingBreakdown from './RatingBreakdown.jsx';
import ProductBreakdown from './ProductBreakdown.jsx';
import ReviewList from './ReviewList.jsx';

// create a handleFilter function that will change state (by filter for specific star)
  // make sure not to remake GET request
class RatingsAndReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: {},
    };
    this.handleSort = this.handleSort.bind(this);
  }

  componentDidUpdate(prevProps) {
    // Check on product rating as it is the latter promise that gets resolved in App
    if (this.props.productRatings !== prevProps.productRatings) {
      axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-nyc/reviews',
      {
        headers: {Authorization: API_KEY},
        params: {
          product_id: this.props.currentProduct.id,
          count: this.getTotalReviewsCount()
        }
      })
      .then((response) => {
        this.setState({
          reviews: response.data
        })
      })
      .catch((error) => {
        throw error;
      })
    }
  }

  getTotalReviewsCount() {
    const productRatings = this.props.productRatings.ratings;
    let totalReviews = 0;
    for (let count in productRatings) {
      totalReviews += Number(productRatings[count]);
    }
    return totalReviews;
  }

  handleSort(e) {
    // make another GET request to rewrite `reviews` state bassed on sort parameter
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-nyc/reviews',
      {
        headers: {Authorization: API_KEY},
        params: {
          product_id: this.props.currentProduct.id,
          count: this.getTotalReviewsCount(),
          sort: e.target.value
        }
      })
      .then((response) => {
        this.setState({
          reviews: response.data
        })
      })
      .catch((error) => {
        throw error;
      })
  }

  render() {
    const { productRatings, currentProduct } = this.props;
    return (
      <div className='widgetContainer'>
        <h3 className='widgetHeader'>RATINGS & REVIEWS</h3>
        <div className='breakdownReviewContainer'>
        {productRatings &&
          <div className='breakdownContainer'>
            <RatingBreakdown productRatings={productRatings}/>
            <br/>
            <ProductBreakdown productRatings={productRatings}/>
          </div>
        }
        <ReviewList
          currentProduct={currentProduct}
          reviews={this.state.reviews.results}
          handleSort={this.handleSort}
          />
        </div>
      </div>
    );
  }
}

export default RatingsAndReviews;