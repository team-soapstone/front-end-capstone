import React from 'react';
import axios from 'axios';
import API_KEY from '../../../../config.js';
import NewReview from './NewReview.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import ProductBreakdown from './ProductBreakdown.jsx';
import ReviewList from './ReviewList.jsx';

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
    const { productRatings, currentProduct } = this.props;
    return (
      <div>
        <h3 className="widgetHeader">RATINGS & REVIEWS</h3>
        <RatingBreakdown productRatings={productRatings}/>
        <ProductBreakdown />
        <ReviewList />
        <NewReview />
      </div>
    );
  }
}

export default RatingsAndReviews;