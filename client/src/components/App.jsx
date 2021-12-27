import React from 'react';
import axios from 'axios';
import NavBar from './NavBar.jsx';
import Ratings from './Ratings.jsx';
import API_KEY from '../../../config.js';
import QuestionView from './QA/QuestionView.jsx';

import Overview from './Overview/Overview.jsx';
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
        console.log(error); // do something with error or throw error
      })
  }

  handleGetRatings(id) {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-nyc/reviews/meta`, { headers: {Authorization: API_KEY}, params: {product_id: id}})
      .then((response) => {
        console.log(response.data.ratings);
        this.setState({
          productRatings: response.data.ratings
        })
      })
      .catch((error) => {
        console.log(error); // do something with error or throw error
      })
  }

  render() {
    return (
      <div>
        <NavBar />
        <h1>
          Hello
        </h1>
        <Ratings productRatings={this.state.productRatings}/>
        <QuestionView productId={this.state.currentProduct.id}/>
        <Overview currentProduct={this.state.currentProduct}/>
        <RatingsAndReviews />
      </div>
    );
  }
}

export default App;