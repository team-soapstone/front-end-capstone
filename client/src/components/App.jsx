import React from 'react';
import axios from 'axios';
import NavBar from './NavBar.jsx';
import API_KEY from '../../../config.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentProduct: {},
      productReview: {}
    };
  }

  componentDidMount() {
    // console.log(this.handleGetProducts());
    // this.setState({
    //  currentProduct: 
    // })
  }

  handleGetProducts() {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-nyc/products`, { headers: {Authorization: API_KEY}, params: {page: 1}})
      .then((response) => {
        this.setState({
          currentProduct: response.data[0]
        })
      })
      .catch((error) => {
        console.log(error); // do something with error or throw error
      })
      .then(() => {
        console.log(this.state);
      })
  }
  




  
  render() {
    return (
      <div>
        <NavBar />
        <h1>
          Hello
        </h1>
      </div>
    );
  }
}

export default App;