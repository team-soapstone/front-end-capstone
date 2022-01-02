import React from 'react';
import { shallow, mount } from 'enzyme';

import ReviewList from '../client/src/components/RatingsAndReviews/ReviewList';
import Review from '../client/src/components/RatingsAndReviews/Review';
import { exampleReviewNone, exampleReviewOne, exampleReviews } from './sampleData';

/**
 * ===========
 * ReviewList will only render Review component(s) once it detects a change in props from the
 * parent component making a GET request for reviews and if the amount of reviews is greater
 * than zero.
 * ===========
 * When implementing the test for sort, check when button is pressed, a different sample review data
 * is passed down as a prop to ReviewList. This is because the component is relying on the API to
 * return back sorted data based off of parameters instead of taking the data provided by the API
 * and sorting it within the component.
 *
 * TODO: implement a test when filtering for the rating given.
 */

describe('Review List', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<ReviewList />);
  })

  describe('If there are no reviews', () => {
    it('should not render any reviews or button to see more reviews', () => {
      wrapper.setProps({ reviews: exampleReviewNone.results })
      console.log(wrapper.debug());
      expect(wrapper.find('Review').length).toBe(0);
      expect(wrapper.find('button#moreReview').length).toBe(0);
    });

    it('should render the button to submit a new review, near the top of the module', () => {

    })
  })
  it('should dynamically render the Reviews component', () => {

  });

  it('should only render two reviews when component first renders', () => {

  });

  it('should render two additional reviews everytime the MORE REVIEW button is pressed', () => {

  });

  it('should remove the MORE REVIEW button if no more reviews are left to be rendered', () => {

  });

  it('should sort the reviews based off of relevance', () => {

  });

  it('should sort the reviews based off of helpfulness', () => {

  });

  it('should sort the reviews based off of date with the most recent on top', () => {

  });
})