import React from 'react';
import { shallow } from 'enzyme';
import axios from 'axios';

import App from '../client/src/components/App';
import API_KEY from '../config';
import { exampleProducts, exampleReviewMetaData } from './sampleData';

const mockUrlProducts = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-nyc/products';
const mockUrlReviewMeta = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-nyc/reviews/meta';

jest.mock('axios');

describe('App Component', () => {
  let wrapper;

  // wait for all API requests to be made on componentDidMount
  beforeAll(() => {
    axios.get.mockResolvedValueOnce({ data: exampleProducts });
    axios.get.mockResolvedValueOnce({ data: exampleReviewMetaData });
    wrapper = shallow(<App />);
  })

  it('Upon mounting, should update state for current product and current review', () => {
    expect(wrapper.state().currentProduct).toEqual(exampleProducts[0]);
    expect(wrapper.state().productRatings).toEqual(exampleReviewMetaData);
    /**
     * Jest will only capture the 2nd GET request with .toHaveBeenCalled as they are different get requests.
     */
    expect(axios.get).toHaveBeenCalled();
  });
});

