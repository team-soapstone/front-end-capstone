import React from 'react';
import Ratings from '../Ratings.jsx';
import moment from 'moment';

// pass in a number to ratings for it to render a star

const Review = ({ review }) => {
  const { reviewer_name, rating, date, summary, body, photos, recommend, response, helpfulness } = review;
  let photoRender;

  if (photos.length > 0) {
    photoRender = <div>
      {photos.map((photo, idx) => {
        return <img
          className='reviewPhotosThumbnail'
          key={`${reviewer_name}_idx`}
          src={photo.url}
          alt='review photo'></img>
      })}
    </div>
  }
  return (
    <div className='reviewContainer'>
      <div className='reviewMeta'>
        <Ratings className='reviewStars' rating={rating}/>
        <p className='reviewUserDate'>{reviewer_name}, {moment(date).format('MMM Do YYYY')}</p>
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