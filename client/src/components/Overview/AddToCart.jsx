import React from 'react';
import axios from 'axios';
import API_KEY from '../../../../config.js';

class AddToCart extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedSize: '',
      selectedSizeQuantity: [1],
      selectedQuantity: 1,
      selectedSKU_id: ''
    }
    this.handleSelectSize = this.handleSelectSize.bind(this);
    this.handleSelectedQuantity = this.handleSelectedQuantity.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }

  handleSelectSize(e) {
    let sku = JSON.parse(e.target.value);
    let quantity = Array.from({length: sku[1].quantity}, (_, i) => i + 1);
    this.setState({
      selectedSize: sku[1].size, 
      selectedSizeQuantity: quantity, 
      selectedQuantity: 1,
      selectedSKU_id: sku[0]
    });
  }

  handleSelectedQuantity(e) {
    this.setState({selectedQuantity: Number(e.target.value)});
  }

  handleAddToCart(e) {
    if (!Number(this.state.selectedSKU_id)) {return}
    console.log({sku_id: Number(this.state.selectedSKU_id), count: this.state.selectedQuantity});
    axios.post(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-nyc/cart`, { headers: {Authorization: API_KEY}, params: {sku_id: this.state.selectedSKU_id} })
      .then((response) => {
        console.log('successfully added to cart', response);
      })
      .catch((error) => {
        throw error;
      })
  }

  render() {
    return(
      <div className="AddtoCartContainer">
        <div className="SizeAndQuantityContainer">
          <select className="SelectSize" defaultValue="Select Size" onChange={this.handleSelectSize} >
            <option value="Select Size" disabled hidden>Select Size</option>
            {Object.entries(this.props.skus).map(sku => (
              <option key={sku[0]} value={JSON.stringify(sku)}>{sku[1].size}</option>
            ))}
          </select>
          <select className="SelectQuantity" value={this.state.selectedQuantity} onChange={this.handleSelectedQuantity}>
            {this.state.selectedSizeQuantity && this.state.selectedSizeQuantity.map((quantity, index) => (
              <option key={index} value={quantity}>{quantity}</option>
            ))}
          </select>
        </div>
        <div className="AddToCartButton" onClick={this.handleAddToCart}>
          <div className="AddToCartButtonContainer">
            <i className="fas fa-cart-plus" /> 
            <span>Add To Cart</span>
          </div>
        </div>
      </div>
    );
  }
}

export default AddToCart;