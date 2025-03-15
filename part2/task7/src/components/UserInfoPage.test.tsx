import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import UserInfoPage from './UserInfoPage';
import * as mockData from '../data/mockData';

// Mock the getUser function from mockData
jest.mock('../data/mockData', () => ({
  getUser: jest.fn()
}));

describe('UserInfoPage component', () => {
  // Test for default text when no user is available
  it('should display "User Not Found" message when user does not exist', () => {
    // Mock getUser to return undefined (no user found)
    jest.spyOn(mockData, 'getUser').mockReturnValue(undefined);

    render(
      <MemoryRouter initialEntries={['/users/999']}>
        <Routes>
          <Route path="/users/:id" element={<UserInfoPage />} />
        </Routes>
      </MemoryRouter>
    );

    // Check for "User Not Found" message
    expect(screen.getByTestId('no-user-message')).toBeInTheDocument();
    expect(screen.getByText('User Not Found')).toBeInTheDocument();
    expect(screen.getByText('The user you are looking for does not exist.')).toBeInTheDocument();
  });

  // Test for displaying user data when user exists
  it('should display user information when user exists', () => {
    // Mock getUser to return a test user
    const testUser = {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      playlistId: 2
    };
    
    jest.spyOn(mockData, 'getUser').mockReturnValue(testUser);

    render(
      <MemoryRouter initialEntries={['/users/1']}>
        <Routes>
          <Route path="/users/:id" element={<UserInfoPage />} />
        </Routes>
      </MemoryRouter>
    );

    // Check user information is displayed correctly
    expect(screen.getByTestId('user-info')).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByTestId('user-email')).toHaveTextContent('Email: john@example.com');
    expect(screen.getByTestId('playlist-link')).toBeInTheDocument();
    expect(screen.getByText('View Playlist')).toBeInTheDocument();
  });
}); 