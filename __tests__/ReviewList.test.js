import React from 'react';
import { shallow } from 'enzyme';

import ReviewList from '../client/src/components/RatingsAndReviews/ReviewList';
import { exampleReviewNone, exampleReviewOne, exampleReviewsTwo, exampleReviews } from './sampleData';

/**
 * Note 1
 * ===========
 * ReviewList will only render Review component(s) once it detects a change in props from the
 * parent component making a GET request for reviews and if the amount of reviews is greater
 * than zero.
 *
 * Note 2
 * ===========
 * The sort test is assuming the data returned from the API is accurately sorted when the
 * parameter is given. The sort test will not test if the data returned is sorted properly.
 * It will only test if the correct parameter is passed to the API of the parent component.
 *
 * // TODO: implement tests for filtering the reviews by ratings.
 * // TODO: implement tests for the correct sort parameter passed to the API
 */

describe('Review List', () => {
  let wrapper;

  describe('For cases when amount of reviews are 2 or less', () => {

    beforeAll(() => {
      wrapper = shallow(<ReviewList />);
    })

    afterAll(() => {
      wrapper.unmount();
    })

    describe('If there are no reviews', () => {
      it('should not render any reviews or button to see more reviews', () => {
        wrapper.setProps({ reviews: exampleReviewNone.results })
        expect(wrapper.find('Review').length).toBe(0);
        expect(wrapper.find('button#moreReview').length).toBe(0);
      });
    })

    describe('If there is just one review', () => {
      it('should only render one review and should not render a button to see more reviews', () => {
        wrapper.setProps({ reviews: exampleReviewOne.results })
        expect(wrapper.find('Review').length).toBe(1);
        expect(wrapper.find('button#moreReview').length).toBe(0);
      });
    })

    describe('If there is just two reviews', () => {
      it('should only render two reviews and should not render a button to see more reviews', () => {
        wrapper.setProps({ reviews: exampleReviewsTwo.results })
        expect(wrapper.find('Review').length).toBe(2);
        expect(wrapper.find('button#moreReview').length).toBe(0);
      });
    })
  });

  describe('If there are multiple reviews', () => {

    beforeEach(() => {
      wrapper = shallow(<ReviewList />);
      wrapper.setProps({ reviews: exampleReviews.results })
    })

    afterEach(() => {
      wrapper.unmount();
    })

    it('should only render two reviews upon the initial update of props from the parent component with the MORE REVIEW button rendered', () => {
      expect(wrapper.find('Review').length).toBe(2);
      expect(wrapper.find('button#moreReview').length).toBe(1);
    });

    it('should render two additional reviews everytime the MORE REVIEW button is pressed', () => {
      wrapper.find('button#moreReview').simulate('click');
      expect(wrapper.find('Review').length).toBe(4);
    });

    it('should remove the MORE REVIEW button if no more reviews are left to be rendered', () => {
      const totalReviews = exampleReviews.results.length;
      const neededClicks = Math.ceil(totalReviews / 2);
      [...Array(neededClicks)].map(() => {
        return wrapper.find('button#moreReview').simulate('click');
      })
      expect(wrapper.find('Review').length).toBe(totalReviews);
      expect(wrapper.find('button#moreReview').length).toBe(0);
    });
  });

  // TODO: Is it best practice to have tests within this component?
  describe('If the sort dropdown is selected', () => {

    it('should should send the "relevant" parameter to the API', () => {

    });

    it('should should send the "helpful" parameter to the API', () => {

    });

    it('should should send the "newest" parameter to the API', () => {

    });
  });

  describe('If the rating is filtered', () => {

  })
})