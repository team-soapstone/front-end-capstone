import React from 'react';

const ProductInformation = ({info, price}) => {

  return (
    <div>
      <div>{info.category}</div>
      <div>{info.name}</div>
      <div>${price}</div>
    </div>
  );
}

export default ProductInformation;