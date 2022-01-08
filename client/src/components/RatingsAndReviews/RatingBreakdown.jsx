import React from 'react';
import Ratings from '../Ratings.jsx';
import ratingAverage from '../util/ratingAverage.js';

const RatingBreakdown = ({ productRatings, handleFilter, filter }) => {
  const averageRating = Number(ratingAverage(productRatings.ratings));
  const totalRating = Object.values(productRatings.ratings).reduce((init, current) => {
    return Number(init) + Number(current);
  }, 0);
  const percentRecommended = Math.round((Number(productRatings.recommended.true) / (Number(productRatings.recommended.false) + Number(productRatings.recommended.true)) * 100));
  const barRenderingStyles = {
    fiveStar: {'--backWidth': `${Number(productRatings.ratings['5']) * 100/ totalRating}%` },
    fourStar: {'--backWidth': `${Number(productRatings.ratings['4']) * 100/ totalRating}%` },
    threeStar: {'--backWidth': `${Number(productRatings.ratings['3']) * 100/ totalRating}%` },
    twoStar: {'--backWidth': `${Number(productRatings.ratings['2']) * 100/ totalRating}%` },
    oneStar: {'--backWidth': `${Number(productRatings.ratings['1']) * 100/ totalRating}%` },
  }

  return (
    <div>
      <div>
        <div id='ratingDisplay'>
          <b id='ratingNumber'>{averageRating}</b>
          <span id='ratingNumberStar'><Ratings rating={averageRating}/></span>
        </div>
        <p>{percentRecommended}% of reviews recommend this product</p>
      </div>
      <table className='ratingTable'>
        <tbody>
          <tr className='fiveStarRow'>
            <td><button
              className='ratingFilterButton'
              value='5'
              onClick={handleFilter}
              style={filter[5] ? { 'fontWeight': 'bold'} : {}}
            >5 star</button></td>
            <td className='barContainer'><div
              id='fiveStarBar'
              className='ratingBar'
              style={barRenderingStyles.fiveStar}
            >Rating Bar</div></td>
          </tr>
          <tr className='fourStarRow'>
            <td><button
              className='ratingFilterButton'
              value='4'
              onClick={handleFilter}
              style={filter[4] ? { 'fontWeight': 'bold'} : {}}
            >4 star</button></td>
            <td className='barContainer'><div
              id='fourStarBar'
              className='ratingBar'
              style={barRenderingStyles.fourStar}
            >Rating Bar</div></td>
          </tr>
          <tr className='threeStarRow'>
            <td><button
              className='ratingFilterButton'
              value='3'
              onClick={handleFilter}
              style={filter[3] ? { 'fontWeight': 'bold'} : {}}
            >3 star</button></td>
            <td className='barContainer'><div
              id='threeStarBar'
              className='ratingBar'
              style={barRenderingStyles.threeStar}
            >Rating Bar</div></td>
          </tr>
          <tr className='twoStarRow'>
            <td><button
              className='ratingFilterButton'
              value='2'
              onClick={handleFilter}
              style={filter[2] ? { 'fontWeight': 'bold'} : {}}
            >2 star</button></td>
            <td className='barContainer'><div
              id='twoStarBar'
              className='ratingBar'
              style={barRenderingStyles.twoStar}
            >Rating Bar</div></td>
          </tr>
          <tr className='oneStarRow'>
            <td><button
              className='ratingFilterButton'
              value='1'
              onClick={handleFilter}
              style={filter[1] ? { 'fontWeight': 'bold'} : {}}
            >1 star</button></td>
            <td className='barContainer'><div
              id='oneStarBar'
              className='ratingBar'
              style={barRenderingStyles.oneStar}
            >Rating Bar</div></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RatingBreakdown;