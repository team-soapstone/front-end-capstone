import React from 'react';

const ProductBreakdown = ({ productRatings }) => {
  // edge cases if no reviews for provided and quality were provided
  // check size or fit property
  let productSize;
  // if size property doesn't exist, check fit
  if (productRatings.characteristics.Size === undefined) {
    if (productRatings.characteristics.Fit === undefined) {
      productSize = 0;
    } else {
      productSize = productRatings.characteristics.Fit.value;
    }
  } else {
    productSize = productRatings.characteristics.Size.value;
  }

  let productQuality;
  if (productRatings.characteristics.Quality === undefined) {
    productQuality = 0
  } else {
    productQuality = productRatings.characteristics.Quality.value
  }

    // for best styling, position analog from 0% to 95% padding-left (where 95% is max)
  const sizeCharacteristic = Number(productSize)
  const sizeAnalogRatio = sizeCharacteristic / 5
  const sizePositioning = sizeAnalogRatio * 95
  const qualityCharacteristic = Number(productQuality)
  const qualityAnalogRatio = qualityCharacteristic / 5
  const qualityPositioning = qualityAnalogRatio * 95

  const analogStyles = {
    size: {'--analogPosition': `${sizePositioning}%`},
    quality: {'--analogPosition': `${qualityPositioning}%`}
  }
  return (
    <div>
      <div>
        <p>Size</p>
        <div className='characteristicBar' style={analogStyles.size}></div>
        <p className='characteristicDescription'>
          <span>Too Small</span>
          <span>Perfect</span>
          <span>Too Big</span>
        </p>
      </div>
      <div>
        <p>Quality</p>
        <div className='characteristicBar' style={analogStyles.quality}></div>
        <p className='characteristicDescription'>
          <span>Poor</span>
          <span>Expected</span>
          <span>Perfect</span>
        </p>
      </div>
    </div>
  );
};

export default ProductBreakdown;