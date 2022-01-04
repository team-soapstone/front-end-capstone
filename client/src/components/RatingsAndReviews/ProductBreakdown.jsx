import React from 'react';

const ProductBreakdown = ({ productRatings }) => {
  console.log(productRatings);

  // for best styling, position analog from 0% to 95% padding-left (where 95% is max)
  const sizeCharacteristic = Math.round(Number(productRatings.characteristics.Comfort.value))
  const sizeAnalogRatio = sizeCharacteristic / 5
  const sizePositioning = sizeAnalogRatio * 95
  const qualityCharacteristic = Math.round(Number(productRatings.characteristics.Quality.value))
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