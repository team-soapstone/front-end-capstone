import React from 'react';
import Ratings from '../Ratings.jsx';
import moment from 'moment';

const Review = ({ review, handleMarkHelpful }) => {
  const { review_id, reviewer_name, rating, date, summary, body, photos, recommend, response, helpfulness } = review;
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
      {recommend ? <p className='reviewRecommend'><i className='fas fa-check'></i> I recommend this product</p> : null}
      <p className='reviewResponse'>{response}</p>
      <p>Helpful? {JSON.parse(localStorage.getItem('reviewsMarkedHelpful'))[review_id] ?
        <b className='reviewUnderline'>Yes</b> : <span className='reviewUnderline clickable' onClick={e => handleMarkHelpful(review_id)}>Yes</span>} ({helpfulness})</p>
    </div>
  );
};

export default Review;