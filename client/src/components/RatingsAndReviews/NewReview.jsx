import React from 'react';
import axios from 'axios';
import API_KEY from '../../../../config.js';

class NewReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
      summary: '',
      body: '',
      recommend: true,
      username: '',
      email: '',
      size: 1,
      quality: 1
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleStarRender = this.handleStarRender.bind(this);
    this.handleReviewFormUpdates = this.handleReviewFormUpdates.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-nyc/reviews',
      { data: {
          product_id: this.props.currentProduct.id,
          rating: this.state.rating,
          summary: this.state.summary,
          body: this.state.body,
          recommend: this.state.recommend,
          name: this.state.username,
          email: this.state.email,
          photos: ['http://placeimg.com/640/480/tech'],
          characteristics: {
            // size / fit
            '131838': this.state.size,
            // quality
            '131841': this.state.quality,
          }
        }
      },
      { headers: {Authorization: API_KEY} }
    )
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      throw error;
    })
  }

  handleStarRender(value) {
    this.setState({
      rating: value
    })
  }

  handleReviewFormUpdates(e) {
    if (e.target.type === 'radio') {
      this.setState({
        [e.target.name]: e.target.value
      })
    } else {
      this.setState({
        [e.target.id]: e.target.value
      })
    }
  }

  render() {
    const { visible, handleClose, currentProduct } = this.props;
    return (
      <form
        id="reviewModal"
        onSubmit={this.handleSubmit}
      >
        <span id="closeReviewForm" onClick={handleClose}>x</span>
        <h3>Write your review about {currentProduct.name}</h3>
        <div
          className='star'
          id='ratingStar'
        >
          {[...Array(5)].map((star, idx) => {
            if (idx < this.state.rating) {
              return <div key={idx} value={idx + 1} onMouseOver={e => this.handleStarRender(idx + 1)}>&#x2605;</div>
            } else {
              return <div key={idx} value={idx + 1} onMouseOver={e => this.handleStarRender(idx + 1)}>&#x2606;</div>
            }
          })}
        </div>

        <p>Summary</p>
        <textarea
          placeholder='Best purchase ever!'
          id='summary'
          onChange={this.handleReviewFormUpdates}
          value={this.state.summary}
        ></textarea>

        <p>Body</p>
        <textarea
          placeholder='Why did you like the product or not?'
          id='body'
          onChange={this.handleReviewFormUpdates}
          value={this.state.body}
        ></textarea>

        <p>Recommend</p>
        <div>
          <input type='radio' name='recommend' id='recommendYes' value='true' onChange={this.handleReviewFormUpdates}></input>
          <label htmlFor='recommendYes'>Yes</label>
          <input type='radio' name='recommend' id='recommendNo' value='false' onChange={this.handleReviewFormUpdates}></input>
          <label htmlFor='recommendNo'>No</label>
        </div>

        <p>Username</p>
        <textarea
          placeholder='For Privacy reasons, do not use your full name or email address.'
          id='username'
          onChange={this.handleReviewFormUpdates}
          value={this.state.username}
        ></textarea>

        <p>Email</p>
        <textarea
          placeholder='For authentication reasons, you will not be emailed.'
          id='email'
          onChange={this.handleReviewFormUpdates}
          value={this.state.email}
        ></textarea>

        <p>Please fill out the below dials!</p>
        <p>Size</p>
        <div>
          <input type='radio' name='size' id='sizeOne' value='1' onChange={this.handleReviewFormUpdates}></input>
          <label htmlFor='sizeOne'>Too Small</label>
          <input type='radio' name='size' id='sizeTwo' value='3' onChange={this.handleReviewFormUpdates}></input>
          <label htmlFor='sizeTwo'>Perfect</label>
          <input type='radio' name='size' id='sizeThree' value='5' onChange={this.handleReviewFormUpdates}></input>
          <label htmlFor='sizeThree'>Too Large</label>
        </div>
        <p>Quality</p>
        <div>
          <input type='radio' name='quality' id='qualityOne' value='1' onChange={this.handleReviewFormUpdates}></input>
          <label htmlFor='qualityOne'>Poor</label>
          <input type='radio' name='quality' id='qualityTwo' value='2' onChange={this.handleReviewFormUpdates}></input>
          <label htmlFor='qualityTwo'>Below Average</label>
          <input type='radio' name='quality' id='qualityThree' value='3' onChange={this.handleReviewFormUpdates}></input>
          <label htmlFor='qualityThree'>Expected</label>
          <input type='radio' name='quality' id='qualityFour' value='4' onChange={this.handleReviewFormUpdates}></input>
          <label htmlFor='qualityFour'>Above Average</label>
          <input type='radio' name='quality' id='qualityFive' value='5' onChange={this.handleReviewFormUpdates}></input>
          <label htmlFor='qualityFive'>Perfect</label>
        </div>
        <br/>
        <button type='submit'>Submit Review</button>
      </form>
    );
  }
}

export default NewReview;