import React from 'react';
import axios from 'axios';
import RatingsAndReviews from '../client/src/components/RatingsAndReviews/RatingsAndReviews.jsx'

import { create, act } from 'react-test-renderer';
import { cleanup, screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';


jest.mock('axios');

describe('Ratings and Reviews tests', () => {
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

  let root;
  it('should receive the current selected product as a prop from App', () => {
    act(() => {
      root = create(<RatingsAndReviews currentProduct={fakeProduct} productRatings={fakeReviews}/>, container);
    });
    console.log(root.toJSON());

  })

  // test('should make a GET request to the API after receiving the prop from App', async () => {

  // })

  // test('should make another GET request to the API if receiving a new prop from App', () => {

  // })
})