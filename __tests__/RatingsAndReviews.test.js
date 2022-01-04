import React from 'react';
import axios from 'axios';
import { shallow, mount } from 'enzyme';

import RatingsAndReviews from '../client/src/components/RatingsAndReviews/RatingsAndReviews.jsx'
import API_KEY from '../config.js';
import { exampleProducts, exampleReviewMetaData, exampleReviews } from './sampleData';

jest.mock('axios');

const mockUrl = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-nyc/reviews';

describe('Ratings and Reviews', () => {
  it('should make an API call when a different prop is passed down', () => {
    axios.get.mockResolvedValue({ data: exampleReviews });
    const wrapper = shallow(<RatingsAndReviews />);

    expect(axios.get).not.toHaveBeenCalled();

    wrapper.setProps({
      currentProduct: exampleProducts[0],
      productRatings: exampleReviewMetaData
    })
    // update mockUrl if API endpoint has changed
    expect(axios.get).toHaveBeenCalledWith(mockUrl, {
      headers: { Authorization: API_KEY },
      params: {
        product_id: exampleReviewMetaData.product_id,
        // find total amount of reivews based off metadata's total amount of ratings
        count: Object.values(exampleReviewMetaData.ratings).reduce((prev, current) => {
          return Number(prev) + Number(current)
        })
      },
    });
  })
})