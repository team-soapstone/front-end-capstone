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
      filterStatus: false,
      filteredReviews: {},
      filter: {
        1: false,
        2: false,
        3: false,
        4: false,
        5: false
      }
    };
    this.handleSort = this.handleSort.bind(this);
    this.handleGetReviews = this.handleGetReviews.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
  }

  componentDidUpdate(prevProps) {
    // Check on product rating as it is the latter promise that gets resolved in App
    if (this.props.productRatings !== prevProps.productRatings) {
      this.handleGetReviews()
    }
  }

  handleGetReviews() {
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

  handleFilter(e) {
    const ratingToToggle = e.target.value;
    Promise.resolve(this.setState((prevState) => {
      return {
        filter: {
          ...prevState.filter,
          [ratingToToggle]: !prevState.filter[ratingToToggle]
        }
      }})
    )
    .then(() => {
      // if all ratings are toggled false, set filterStatus to false to render original reviewList
      if (Object.values(this.state.filter).every(v => v === false)) {
        this.setState({
          filterStatus: false
        })
      } else {
        this.setState({
          filterStatus: true,
          filteredReviews: {...this.state.reviews}
        })
      }
    })
    .then(() => {
      if (this.state.filterStatus === true) {
        // filter the rewviews for rating filter toggled true
        const filteredReviewList = this.state.reviews.results.filter((review) => {
          // return if rating is true wtihin state
          return this.state.filter[review.rating] === true;
        })
        this.setState((prevState) => {
          return {
            filteredReviews: {
              ...prevState.fileredReviews,
              results: filteredReviewList
            }
          }
        })
      }
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
            <RatingBreakdown
              productRatings={productRatings}
              handleFilter={this.handleFilter}
              filter={this.state.filter}
            />
            <br/>
            <ProductBreakdown productRatings={productRatings}/>
          </div>
        }
        <ReviewList
          currentProduct={currentProduct}
          productRatings={productRatings}
          handleGetReviews={this.handleGetReviews}
          reviews={this.state.filterStatus ? this.state.filteredReviews.results : this.state.reviews.results}
          handleSort={this.handleSort}
          />
        </div>
      </div>
    );
  }
}

export default RatingsAndReviews;