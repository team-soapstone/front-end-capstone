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
      currentProduct: '',
      productRatings: '',
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
        let ratings = response.data;
        if (JSON.stringify(ratings.ratings) === JSON.stringify({})) {
          ratings.ratings = { 0: '1', 1: '0', 2: '0', 3: '0', 4: '0', 5: '0'};
        }
        this.setState({
          productRatings: ratings
        })
      })
      .catch((error) => {
        throw error;
      })
  }

  handleSearch(query) {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-nyc/products`, { headers: {Authorization: API_KEY}, params: {page: 1, count: 100}})
    .then((response) => {
      response.data.some((item, index) => {
        let found = false;
        let lowerCaseQuery = query.toLowerCase();
        if ( item.name.toLowerCase().includes(lowerCaseQuery) ) {
            this.setState({currentProduct: response.data[index]});
            found = true;
          }
          if (found) {
            return true;
          } else {
            return false;
          }
        })
      })
      .then(() => {
        this.handleGetRatings(this.state.currentProduct.id);
      })
      .catch((error) => {
        throw error;
      })
  }

  render() {
    return (
      <div>
        <NavBar search={this.handleSearch.bind(this)}/>
        <Overview currentProduct={this.state.currentProduct} ratings={this.state.productRatings.ratings}/>
        <QuestionView productId={this.state.currentProduct.id} productName={this.state.currentProduct.name}/>
        <a id="RatingsAndReviews"></a>
        <RatingsAndReviews
          currentProduct={this.state.currentProduct}
          productRatings={this.state.productRatings}
        />
      </div>
    );
  }
}

export default App;