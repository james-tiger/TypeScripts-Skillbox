import React from 'react';
import { render } from '@testing-library/react';
import MainPage from './MainPage';

describe('MainPage component', () => {
  // Snapshot test for MainPage component
  it('should match snapshot', () => {
    const { container } = render(<MainPage />);
    expect(container).toMatchSnapshot();
  });
}); 