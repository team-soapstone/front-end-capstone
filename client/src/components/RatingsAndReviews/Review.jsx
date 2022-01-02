import React from 'react';
import Ratings from '../Ratings.jsx';
import moment from 'moment';

// pass in a number to ratings for it to render a star

const Review = ({ review }) => {
  const { reviewer_name, rating, date, summary, body, photos, recommend, response, helpfulness } = review;
  let photoRender;
  if (photos.length > 0) {
    photoRender = <li>
      {photos.map((photo, idx) => {
        return <ul key={`${reviewer_name}_idx`}>photo</ul>
      })}
    </li>
  }
  return (
    <div>
      <div className='reviewMeta'>
        <Ratings rating={rating}/>
        <p className='user'>{reviewer_name}, {moment(date).format('MMM Do YYYY')}</p>
      </div>
      <h4 className='reviewHeader'>{summary}</h4>
      <p className='reviewBody'>{body}</p>
      {photoRender}
      <p className='reviewRecommend'>{recommend}</p>
      <p className='reviewResponse'>{response}</p>
      <p>Helpful? Yes ({helpfulness})</p>
    </div>
  );
};

export default Review;