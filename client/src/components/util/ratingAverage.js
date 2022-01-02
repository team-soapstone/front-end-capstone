const ratingAverage = (productRatings) => {
  console.log(productRatings);
  const defaultRatings = { 0: '1', 1: '0', 2: '0', 3: '0', 4: '0', 5: '0'};

  // == EDGE CASES == Do not change order
  if (productRatings === undefined) {
    productRatings = defaultRatings;
  // if falsey (empty string)
  } else if (!productRatings) {
    productRatings = defaultRatings;
  } else if (Object.values(productRatings).length === 0) {
    productRatings = defaultRatings;
  // if product ratings has properties, but total ratings count is 0
  } else if (Object.values(productRatings).reduce((init, current) => { return init + current; }) === 0) {
    productRatings = defaultRatings;
  }

  let numerator = 0;
  let denominator = 0;
  for (let star in productRatings) {
    numerator += Number(star) * Number(productRatings[star]);
    denominator += Number(productRatings[star]);
  }
  let number = numerator / denominator;
  return ((Math.round(number * 4) / 4).toFixed(2));
};

export default ratingAverage;