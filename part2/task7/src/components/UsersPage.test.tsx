import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import UsersPage from './UsersPage';
import * as router from 'react-router-dom';

// Mock the useSearchParams hook
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useSearchParams: jest.fn(),
}));

describe('UsersPage component', () => {
  // Test that setSearchParam is called when entering a user name
  it('should call setSearchParam when user enters name and submits', () => {
    // Mock implementation for useSearchParams
    const setSearchParamsMock = jest.fn();
    jest.spyOn(router, 'useSearchParams').mockImplementation(() => [
      new URLSearchParams({ name: '' }),
      setSearchParamsMock
    ]);

    render(
      <BrowserRouter>
        <UsersPage />
      </BrowserRouter>
    );

    // Find the input field and enter a name
    const nameInput = screen.getByTestId('name-filter');
    fireEvent.change(nameInput, { target: { value: 'John' } });
    
    // Submit the form
    const submitButton = screen.getByText('Search');
    fireEvent.click(submitButton);

    // Check if setSearchParams was called with the correct parameters
    expect(setSearchParamsMock).toHaveBeenCalledWith({ name: 'John' });
  });
}); 