import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { getAllPlaylists } from '../api/api';
import { Playlist } from '../types';
import '../styles/Playlists.css';

const Playlists: React.FC = () => {
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchName = searchParams.get('name') || '';
  const searchGenre = searchParams.get('genre') || '';

  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const allPlaylists = await getAllPlaylists();
        setPlaylists(allPlaylists);
      } catch (error) {
        console.error('Error fetching playlists:', error);
      }
    };

    fetchPlaylists();
  }, []);

  const handleNameFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchParams = new URLSearchParams(searchParams);
    if (e.target.value) {
      newSearchParams.set('name', e.target.value);
    } else {
      newSearchParams.delete('name');
    }
    setSearchParams(newSearchParams);
  };

  const handleGenreFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchParams = new URLSearchParams(searchParams);
    if (e.target.value) {
      newSearchParams.set('genre', e.target.value);
    } else {
      newSearchParams.delete('genre');
    }
    setSearchParams(newSearchParams);
  };

  const filteredPlaylists = playlists.filter(playlist => 
    playlist.genre !== 'Non Music' &&
    playlist.name.toLowerCase().includes(searchName.toLowerCase()) &&
    (!searchGenre || playlist.genre.toLowerCase().includes(searchGenre.toLowerCase()))
  );

  return (
    <div className="playlists-container">
      <h1>Playlists</h1>
      
      <div className="filters">
        <div className="filter">
          <label htmlFor="name-filter">Filter by name:</label>
          <input
            id="name-filter"
            type="text"
            value={searchName}
            onChange={handleNameFilterChange}
            placeholder="Enter playlist name"
          />
        </div>

        <div className="filter">
          <label htmlFor="genre-filter">Filter by genre:</label>
          <input
            id="genre-filter"
            type="text"
            value={searchGenre}
            onChange={handleGenreFilterChange}
            placeholder="Enter genre"
          />
        </div>
      </div>

      {filteredPlaylists.length === 0 ? (
        <p>No playlists found matching your filters.</p>
      ) : (
        <div className="playlists-list">
          {filteredPlaylists.map(playlist => (
            <div key={playlist.id} className="playlist-item">
              <Link to={`/playlists/${playlist.id}`}>
                <h3>{playlist.name}</h3>
                <p>Genre: {playlist.genre}</p>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Playlists; 