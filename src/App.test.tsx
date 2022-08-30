import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders weather app home page', () => {
  render(<App />);
  const linkElement = screen.getByText(/Discover the weather in your city/i);
  expect(linkElement).toBeInTheDocument();
});
