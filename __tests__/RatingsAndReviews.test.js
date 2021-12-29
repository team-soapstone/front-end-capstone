import React from 'react';
import axios from 'axios';
import { shallow, mount } from 'enzyme';

import RatingsAndReviews from '../client/src/components/RatingsAndReviews/RatingsAndReviews.jsx'
import API_KEY from '../config.js';

jest.mock('axios');

const fakeProduct = {
  id: '10',
  name: 'dark hoodie',
  slogan: 'leet',
  description: 'This will make you feel like a hacker!',
  category: 'Sweater',
  default_price: '50'
}
const fakeReviews = {
  product_id: '10',
  ratings: { 1: '0', 2: '1', 3:'3', 4:'5', 5:'1' },
  recommended: {},
  characteristics: {}
}
const mockUrl = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-nyc/reviews';

describe('Ratings and Reviews', () => {
  it('should make an API call when a different prop is passed down', () => {
    axios.get.mockResolvedValue({ data: fakeProduct});
    const wrapper = shallow(<RatingsAndReviews />);

    expect(axios.get).not.toHaveBeenCalled();

    wrapper.setProps({ currentProduct: fakeProduct })
    expect(axios.get).toHaveBeenCalledWith(mockUrl, {
      headers: { Authorization: API_KEY },
      params: { product_id: fakeProduct.id }
    });
  })
})