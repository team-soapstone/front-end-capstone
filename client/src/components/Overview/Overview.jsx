import React from 'react';

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

    }
  }

  render() {
    return(
      <div>
        <ImageGallery />
        <Ratings />
        <ProductInformation />
        <StyleSelector />
        <AddToCart />
        <Share />
        <ProductDescription />
      </div>
    );
  }
}

export default Overview;