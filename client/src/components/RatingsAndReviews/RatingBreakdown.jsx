import React from 'react';
import Ratings from '../Ratings.jsx';
import ratingAverage from '../util/ratingAverage.js';

const RatingBreakdown = ({ productRatings }) => {
// import average utility and render number
// pass in average ratings to ratings star renderer
// render a string to show how many reviews recommend the product
// render a bar chart of stars
// color scheme - green and grey
  console.log('Product Ratings ', productRatings)
  const averageRating = Number(ratingAverage(productRatings.ratings));
  const percentRecommended = Math.round((Number(productRatings.recommended.true) / (Number(productRatings.recommended.false) + Number(productRatings.recommended.true)) * 100));

  return (
    <div>
      <div>
        <h2>{averageRating}</h2>
        <Ratings rating={averageRating}/>
        <p>{percentRecommended}% of reviews recommend this product</p>
      </div>
      <table className='ratingTable'>
        <tbody>
          <tr className='fiveStarRow'>
            <td><button>5 star</button></td>
            <td className='barContainer'><div id='fiveStarBar' className='ratingBar' style={{width: '50%'}}>Rating Bar</div></td>
          </tr>
          <tr className='fourStarRow'>
            <td><button>4 star</button></td>
            <td className='barContainer'><div id='fourStarBar' className='ratingBar' style={{width: '50%'}}>Rating Bar</div></td>
          </tr>
          <tr className='threeStarRow'>
            <td><button>3 star</button></td>
            <td className='barContainer'><div id='threeStarBar' className='ratingBar' style={{width: '50%'}}>Rating Bar</div></td>
          </tr>
          <tr className='twoStarRow'>
            <td><button>2 star</button></td>
            <td className='barContainer'><div id='twoStarBar' className='ratingBar' style={{width: '50%'}}>Rating Bar</div></td>
          </tr>
          <tr className='oneStarRow'>
            <td><button>1 star</button></td>
            <td className='barContainer'><div id='oneStarBar' className='ratingBar' style={{width: '50%'}}>Rating Bar</div></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RatingBreakdown;