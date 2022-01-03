import React from 'react';

const ProductDescription = ({info}) => {

  return (
    <div className="ProductDescriptionContainer">
      <div className="ProductDescription">
        <div className="ProductSlogan">
          {info.slogan}
        </div>
        <div className="ProductDescriptionText">
          {info.description}
        </div>
      </div>
      <div className="ProductFeaturesContainer">
        {info.features.map((feature, index) => (
          <div key={index}>{`${feature.feature}: ${feature.value}`}</div>
        ))}
      </div>

    </div>
  );
}

export default ProductDescription;