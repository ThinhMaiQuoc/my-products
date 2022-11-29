import { render, screen } from '@testing-library/react';
import Home from '../pages';
import React from 'react';
describe('App', () => {
  it('should render', () => {
    render(<Home />);
    expect(screen.getByTestId('Home')).toHaveTextContent(
      "Thinh's Awesome Ecommerce App"
    );
  });
});
