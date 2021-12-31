import React from 'react';
import { shallow, mount, render } from 'enzyme';
import axios from 'axios';

import App from '../client/src/components/App.jsx';
import API_KEY from '../config.js';

const exampleProducts = [
  {
    "id": 1,
    "name": "Camo Onesie",
    "slogan": "Blend in to your crowd",
    "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
    "category": "Jackets",
    "default_price": "140"
    }
];
const exampleReview = {
  "product_id": "2",
  "ratings": {
    1: 0,
    2: 1,
    3: 1,
    4: 2,
    5: 3
  }
};

const mockUrlProducts = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-nyc/products';
const mockUrlReviewMeta = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-nyc/reviews/meta';

jest.mock('axios');

describe('App Component', () => {
  let wrapper;

  // wait for all API requests to be made on componentDidMount
  beforeAll((done) => {
    axios.get.mockResolvedValueOnce({ data: exampleProducts});
    axios.get.mockResolvedValueOnce({ data: exampleReview });
    wrapper = shallow(<App />);
    done();
  })

  it('Upon mounting, should update state for current product and current review', () => {
    console.log('test state', wrapper.state());

    expect(wrapper.state().currentProduct).toEqual(exampleProducts[0]);
    expect(wrapper.state().productRatings).toEqual(exampleReview.ratings);
    /**
     * Jest will only capture the 2nd GET request with .toHaveBeenCalled as they are different get requests.
     */
    expect(axios.get).toHaveBeenCalled();
  });
});

