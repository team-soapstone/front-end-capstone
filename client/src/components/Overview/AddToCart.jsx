import React from 'react';

class AddToCart extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedSize: '',
      selectedSizeQuantity: '',
      selectedQuantity: 1
    }
    this.handleSelectSize = this.handleSelectSize.bind(this);
    this.handleSelectedQuantity = this.handleSelectedQuantity.bind(this);
  }

  handleSelectSize(e) {
    let sku = JSON.parse(e.target.value);
    let quantity = Array.from({length: sku.quantity}, (_, i) => i + 1);
    this.setState({selectedSize: sku.size, selectedSizeQuantity: quantity, selectedQuantity: 1});
  }

  handleSelectedQuantity(e) {
    
  }

  render() {
    return(
      <div className="AddtoCartContainer">
        <select onChange={this.handleSelectSize}>
          <option value="" disabled selected hidden>Select Size</option>
            {Object.values(this.props.skus).map((sku, index) => (
              <option key={index} value={JSON.stringify(sku)}>{sku.size}</option>
            ))}
        </select>
        <select onChange={this.handleSelectedQuantity}>
          <option value="" disabled selected hidden>{this.state.selectedQuantity}</option>
          {this.state.selectedSizeQuantity && this.state.selectedSizeQuantity.map((size, index) => (
            <option key={index}>{size}</option>
          ))}
        </select>
      </div>
    );
  }
}

export default AddToCart;