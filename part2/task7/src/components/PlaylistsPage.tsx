import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Playlist } from '../models/types';
import { filterPlaylists } from '../data/mockData';

const PlaylistsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const nameParam = searchParams.get('name') || '';
  const genreParam = searchParams.get('genre') || '';
  
  const [nameFilter, setNameFilter] = useState(nameParam);
  const [genreFilter, setGenreFilter] = useState(genreParam);
  const [playlists, setPlaylists] = useState<Playlist[]>([]);

  useEffect(() => {
    setPlaylists(filterPlaylists(nameParam, genreParam));
  }, [nameParam, genreParam]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    const params: { name?: string; genre?: string } = {};
    if (nameFilter) params.name = nameFilter;
    if (genreFilter) params.genre = genreFilter;
    
    setSearchParams(params);
  };

  return (
    <div>
      <h1>Playlists</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search by name"
          value={nameFilter}
          onChange={(e) => setNameFilter(e.target.value)}
          data-testid="name-filter"
        />
        <select
          value={genreFilter}
          onChange={(e) => setGenreFilter(e.target.value)}
          data-testid="genre-filter"
        >
          <option value="">All Genres</option>
          <option value="Rock">Rock</option>
          <option value="Pop">Pop</option>
          <option value="Hip Hop">Hip Hop</option>
        </select>
        <button type="submit">Search</button>
      </form>

      <div className="playlists-list">
        {playlists.length > 0 ? (
          playlists.map((playlist) => (
            <div key={playlist.id} className="card">
              <h3>{playlist.name}</h3>
              <p>Genre: {playlist.genre}</p>
              <p>Songs: {playlist.songs.length}</p>
              <Link to={`/playlists/${playlist.id}`}>View Details</Link>
            </div>
          ))
        ) : (
          <p>No playlists found with the specified filters.</p>
        )}
      </div>
    </div>
  );
};

export default PlaylistsPage; 