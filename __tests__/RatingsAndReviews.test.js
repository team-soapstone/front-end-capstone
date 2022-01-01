import React from 'react';
import axios from 'axios';
import { shallow, mount } from 'enzyme';

import RatingsAndReviews from '../client/src/components/RatingsAndReviews/RatingsAndReviews.jsx'
import API_KEY from '../config.js';

jest.mock('axios');

const exampleProducts = [
  {
    "id": '10',
    "name": "Midnight Shades",
    "slogan": "See the darkness",
    "description": "So dark you won't see any lights!.",
    "category": "Sunglasses",
    "default_price": "1000"
  }
];

const exampleReviewMetaData = {
  product_id: '10',
  ratings: { 1: '0', 2: '1', 3:'3', 4:'5', 5:'1' },
  recommended: {},
  characteristics: {}
}

const exampleReviews = {
  product: '10',
  page: '0',
  count: '5',
  results: [
    {
      review_id: '5',
      rating: '3',
      summary: 'I\'m enjoying wearing these shades',
      recommended: false,
      response: null,
      body: 'comfortable and practical',
      date: '2019-04-14T00:00:00.000Z',
      reviewer_name: 'shortandsweeet',
      helpfulness: '5',
      photos: [{
        id: 1,
        url: 'urlplaceholder/review_5_photo_number_1.jpg',
      }]
    }
  ]
}

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