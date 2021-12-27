import React from 'react';
import { cleanup, screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import QuestionView from '../client/src/components/QA/QuestionView.jsx';

afterEach(cleanup);

it('check to make sure QuestionView is rendering properly', () => {
  render(<QuestionView />);
  const targetElement = screen.getByTestId('question-view');
  expect(targetElement).toBeInTheDocument();
});