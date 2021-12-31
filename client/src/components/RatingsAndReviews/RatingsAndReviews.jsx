import React from 'react';
import axios from 'axios';
import API_KEY from '../../../../config.js';
import NewReview from './NewReview.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import ProductBreakdown from './ProductBreakdown.jsx';
import ReviewList from './ReviewList.jsx';

// create a sort component and a handleSort that will change state
// depending on what sort option is picked,
  // remake get request to change reviewList (in specific order)
// create a handleFilter function that will change state (by filter for specific star)
  // make sure not to remake GET request

class RatingsAndReviews extends React.Component {
  constructor({props}) {
    super(props);
    this.state = {
      reviews: []
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.currentProduct !== prevProps.currentProduct) {
      axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-nyc/reviews', { headers: {Authorization: API_KEY}, params: {product_id: this.props.currentProduct.id}})
      .then((response) => {
        this.setState({
          reviews: response.data.results
        })
      })
      .catch((error) => {
        throw error;
      })
    }
  }

  render() {
    console.log(this.props);
    const { productRatings, currentProduct } = this.props;
    return (
      <div>
        <h3 className="widgetHeader">RATINGS & REVIEWS</h3>
        <RatingBreakdown productRatings={productRatings}/>
        <ProductBreakdown productRatings={productRatings}/>
        <ReviewList reviews={this.state.reviews}/>
        <NewReview />
      </div>
    );
  }
}

export default RatingsAndReviews;