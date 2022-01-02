import React from 'react';
import { shallow } from 'enzyme';

import Ratings from '../client/src/components/Ratings.jsx';

describe('Ratings', () => {
  describe('When an invalid prop is passed into the component', () => {
    it('should render 5 empty stars as a default', () => {
      // test numbers less than 0, greater than 5
      // if partial, must contain, 0,25, 0.5, or 0.75, else render as 0.
      // strings
      // undefined, null
    })
  })

  describe('When a number between 1 to 5 is passed into the component', () => {
    it('should render the same amount of filled stars', () => {

    })

    it('should render a partially filled star if the average rating passed in was rounded to 0.25, 0.5, 0.75', () => {

    })
  })
})