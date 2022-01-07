import React from 'react';

const ProductInformation = ({info, price, salePrice}) => {
  let isOnSale = false;
  if (salePrice !== null) {
    isOnSale = true;
  }
  return (
    <div>
      <div className="ProductCategory">{info.category}</div>
      <div className="ProductName">{info.name}</div>
      <div className="ProductPrice">
        {isOnSale ? (
          <div>
            <span className="SalePrice">${salePrice}</span>
            <i className="fas fa-tags"> On Sale!</i>
            <span className="OldPrice">${price}</span>
          </div>
          ) : (
          <span className="BasePrice">${price}</span>
        )}
      </div>
    </div>
  );
}

export default ProductInformation;