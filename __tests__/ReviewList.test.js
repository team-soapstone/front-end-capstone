import React from 'react';
import { shallow, mount } from 'enzyme';

import ReviewList from '../client/src/components/RatingsAndReviews/ReviewList.jsx';

/**
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

  it('should dynamically render the Reviews component', () => {
    console.log(wrapper.debug())
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