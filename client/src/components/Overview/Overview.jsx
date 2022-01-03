import React from 'react';
import axios from 'axios';
import API_KEY from '../../../../config.js';

import Ratings from '../Ratings.jsx';
import ratingAverage from '../util/ratingAverage.js';
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
      selectedStyle: '',
      currentPhoto: '',
      selectedStylePhotos: '',
      productInformation: '',
      price: 0,
      ratingsAverage: ''
    }
    this.handleChangeStyle = this.handleChangeStyle.bind(this);
    this.getRatingsAverage = this.getRatingsAverage.bind(this);
  }
  
  componentDidMount() {
    this.getStyles(this.props.currentProduct.id);
    this.getInformation(this.props.currentProduct.id);
    this.getRatingsAverage();
  }

  componentDidUpdate(prevProps) {
    if (this.props.currentProduct !== prevProps.currentProduct) {
      this.getStyles(this.props.currentProduct.id);
      this.getInformation(this.props.currentProduct.id);
    }
    if (this.props.ratings !== prevProps.ratings) {
      this.getRatingsAverage();
    }
  }
  
  getRatingsAverage() {
    let rating = Number(ratingAverage(this.props.ratings));
    this.setState({ratingsAverage: rating});
  }

  getStyles(id) {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-nyc/products/${id}/styles`, { headers: {Authorization: API_KEY} })
      .then((response) => {
        this.setState({
          styles: response.data.results,
          selectedStyle: response.data.results[0],
          currentPhoto: response.data.results[0].photos[0].url,
          selectedStylePhotos: response.data.results[0].photos,
          price: response.data.results[0].original_price
        })
      })
      .catch((error) => {
        throw error;
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
        throw error;
      })
  }

  handleChangeStyle(styleIndex) {
    this.setState({
      selectedStyle: this.state.styles[styleIndex],
      currentPhoto: this.state.styles[styleIndex].photos[0].url,
      selectedStylePhotos: this.state.styles[styleIndex].photos,
      price: this.state.styles[styleIndex].original_price
    })
  }

  render() {
    return(
      <div className="OverviewContainer">
        {this.state.styles && <ImageGallery selectedStyle={this.state.selectedStyle} selectedStylePhotos={this.state.selectedStylePhotos} currentPhoto={this.state.currentPhoto}/>}
        <div className="InformationContainer">
          <Ratings rating={this.state.ratingsAverage}/>
          <ProductInformation info={this.state.productInformation} price={this.state.price}/>
          {this.state.styles && <StyleSelector styles={this.state.styles} selectedStyle={this.state.selectedStyle} changeStyle={this.handleChangeStyle}/>}
          <AddToCart />
          <Share />
        </div>
        <ProductDescription />
      </div>
    );
  }
}

export default Overview;