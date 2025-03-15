import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import PlaylistInfoPage from './PlaylistInfoPage';
import * as mockData from '../data/mockData';

// Mock the getPlaylist function from mockData
jest.mock('../data/mockData', () => ({
  getPlaylist: jest.fn()
}));

describe('PlaylistInfoPage component', () => {
  // Test for default text when no playlist is available
  it('should display "Playlist Not Found" message when playlist does not exist', () => {
    // Mock getPlaylist to return undefined (no playlist found)
    jest.spyOn(mockData, 'getPlaylist').mockReturnValue(undefined);

    render(
      <MemoryRouter initialEntries={['/playlists/999']}>
        <Routes>
          <Route path="/playlists/:id" element={<PlaylistInfoPage />} />
        </Routes>
      </MemoryRouter>
    );

    // Check for "Playlist Not Found" message
    expect(screen.getByTestId('no-playlist-message')).toBeInTheDocument();
    expect(screen.getByText('Playlist Not Found')).toBeInTheDocument();
    expect(screen.getByText('The playlist you are looking for does not exist.')).toBeInTheDocument();
  });

  // Test for displaying playlist data when playlist exists
  it('should display playlist information when playlist exists', () => {
    // Mock getPlaylist to return a test playlist
    const testPlaylist = {
      id: 1,
      name: 'Rock Classics',
      genre: 'Rock',
      songs: [
        { id: 1, title: 'Bohemian Rhapsody', artist: 'Queen', duration: '5:55' },
        { id: 2, title: 'Stairway to Heaven', artist: 'Led Zeppelin', duration: '8:02' }
      ]
    };
    
    jest.spyOn(mockData, 'getPlaylist').mockReturnValue(testPlaylist);

    render(
      <MemoryRouter initialEntries={['/playlists/1']}>
        <Routes>
          <Route path="/playlists/:id" element={<PlaylistInfoPage />} />
        </Routes>
      </MemoryRouter>
    );

    // Check playlist information is displayed correctly
    expect(screen.getByTestId('playlist-info')).toBeInTheDocument();
    expect(screen.getByTestId('playlist-name')).toHaveTextContent('Rock Classics');
    expect(screen.getByTestId('playlist-genre')).toHaveTextContent('Genre: Rock');
    expect(screen.getByTestId('songs-count')).toHaveTextContent('Number of songs: 2');
    
    // Check for song titles
    expect(screen.getByText('Bohemian Rhapsody')).toBeInTheDocument();
    expect(screen.getByText('Stairway to Heaven')).toBeInTheDocument();
  });
}); 