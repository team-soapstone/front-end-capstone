import React from 'react';
import axios from 'axios';
import API_KEY from '../../../config.js';

import NavBar from './NavBar.jsx';
import Ratings from './Ratings.jsx';
import Overview from './Overview/Overview.jsx';
import QuestionView from './QA/QuestionView.jsx';
import RatingsAndReviews from './RatingsAndReviews/RatingsAndReviews.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentProduct: {},
      productRatings: {},
    };
  }

  componentDidMount() {
    this.handleGetProducts();
  }

  handleGetProducts() {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-nyc/products`, { headers: {Authorization: API_KEY}, params: {page: 1}})
      .then((response) => {
        this.setState({
          currentProduct: response.data[0]
        })
      })
      .then(() => {
        this.handleGetRatings(this.state.currentProduct.id);
      })
      .catch((error) => {
        throw error;
      })
  }

  handleGetRatings(id) {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-nyc/reviews/meta`, { headers: {Authorization: API_KEY}, params: {product_id: id}})
      .then((response) => {
        this.setState({
          productRatings: response.data
        })
      })
      .catch((error) => {
        throw error;
      })
  }

  render() {
    return (
      <div>
        <NavBar />
        <Ratings productRatings={this.state.productRatings}/>
        <QuestionView productId={this.state.currentProduct.id}/>
        <Overview currentProduct={this.state.currentProduct}/>
        <RatingsAndReviews
          currentProduct={this.state.currentProduct}
          productRatings={this.state.productRatings}
        />
      </div>
    );
  }
}

export default App;