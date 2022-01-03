import React from 'react';

const ProductInformation = ({info, price}) => {

  return (
    <div>
      <div className="ProductCategory">{info.category}</div>
      <div className="ProductName">{info.name}</div>
      <div className="ProductPrice">${price}</div>
    </div>
  );
}

export default ProductInformation;