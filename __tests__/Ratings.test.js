import React from 'react';
import { cleanup, screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Ratings from '../client/src/components/Ratings.jsx';

afterEach(cleanup);

it('Check if Ratings component renders the correct average', () => {
  const productRatings = { 1: '4', 2: '3', 3: '8', 4: '1', 5: '1'};
  render(<Ratings productRatings={productRatings}/>);
  const rating = screen.getByTestId('avg');
  expect(rating).toBeInTheDocument();
  expect(rating).toHaveTextContent('2.5');
});