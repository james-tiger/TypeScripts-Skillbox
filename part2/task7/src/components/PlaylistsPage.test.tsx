import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import PlaylistsPage from './PlaylistsPage';
import * as router from 'react-router-dom';

// Mock the useSearchParams hook
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useSearchParams: jest.fn(),
}));

describe('PlaylistsPage component', () => {
  // Test that setSearchParam is called when entering genre and name
  it('should call setSearchParam when user enters name and genre and submits', () => {
    // Mock implementation for useSearchParams
    const setSearchParamsMock = jest.fn();
    jest.spyOn(router, 'useSearchParams').mockImplementation(() => [
      new URLSearchParams({ name: '', genre: '' }),
      setSearchParamsMock
    ]);

    render(
      <BrowserRouter>
        <PlaylistsPage />
      </BrowserRouter>
    );

    // Find the input fields and enter values
    const nameInput = screen.getByTestId('name-filter');
    const genreSelect = screen.getByTestId('genre-filter');
    
    fireEvent.change(nameInput, { target: { value: 'Rock' } });
    fireEvent.change(genreSelect, { target: { value: 'Rock' } });
    
    // Submit the form
    const submitButton = screen.getByText('Search');
    fireEvent.click(submitButton);

    // Check if setSearchParams was called with the correct parameters
    expect(setSearchParamsMock).toHaveBeenCalledWith({ 
      name: 'Rock', 
      genre: 'Rock' 
    });
  });
}); 