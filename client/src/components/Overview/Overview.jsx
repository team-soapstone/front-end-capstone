import React from 'react';
import axios from 'axios';
import API_KEY from '../../../../config.js';

import Ratings from '../Ratings.jsx';
import ImageGallery from './ImageGallery.jsx';
import ProductInformation from './ProductInformation.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';
import Share from './Share.jsx';
import ProductDescription from './ProductDescription.jsx';

class Overview extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      styles: '',
      selectedStyle: 0,
      currentPhoto: '',
      selectedStylePhotos: '',
      productInformation: '',
      price: 0
    }
  }

  componentDidMount() {
    this.getStyles(this.props.currentProduct.id);
  }

  getStyles(id) {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-nyc/products/${id}/styles`, { headers: {Authorization: API_KEY} })
      .then((response) => {
        console.log(response.data.results);
        this.setState({
          styles: response.data.results,
          currentPhoto: response.data.results[0].photos[0].url,
          selectedStylePhotos: response.data.results[0].photos,
          price: response.data.results[0].original_price
        })
      })
      .catch((error) => {
        console.log(error); // do something with error or throw error
      })
  }

  getInformation(id) {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-nyc/products/${id}`, { headers: {Authorization: API_KEY} })
      .then((response) => {
        console.log(response.data.results);
        this.setState({
          productInformation: response.data
        })
      })
      .catch((error) => {
        console.log(error); // do something with error or throw error
      })
  }

  render() {
    return(
      <div>
        {this.state.styles && <ImageGallery selectedStyle={this.state.selectedStyle} selectedStylePhotos={this.state.selectedStylePhotos} currentPhoto={this.state.currentPhoto}/>}
        <Ratings />
        <ProductInformation info={this.state.productInformation} price={this.state.price}/>
        <StyleSelector />
        <AddToCart />
        <Share />
        <ProductDescription />
      </div>
    );
  }
}

export default Overview;