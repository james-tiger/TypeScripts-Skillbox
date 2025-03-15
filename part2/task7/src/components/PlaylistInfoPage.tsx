import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Playlist } from '../models/types';
import { getPlaylist } from '../data/mockData';

const PlaylistInfoPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [playlist, setPlaylist] = useState<Playlist | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const fetchedPlaylist = getPlaylist(parseInt(id));
      setPlaylist(fetchedPlaylist);
    }
    setLoading(false);
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!playlist) {
    return (
      <div data-testid="no-playlist-message">
        <h1>Playlist Not Found</h1>
        <p>The playlist you are looking for does not exist.</p>
        <Link to="/playlists">Back to Playlists</Link>
      </div>
    );
  }

  return (
    <div data-testid="playlist-info">
      <h1 data-testid="playlist-name">{playlist.name}</h1>
      <p data-testid="playlist-genre">Genre: {playlist.genre}</p>
      <p data-testid="songs-count">Number of songs: {playlist.songs.length}</p>
      
      <h2>Songs</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Artist</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {playlist.songs.map((song) => (
            <tr key={song.id}>
              <td>{song.title}</td>
              <td>{song.artist}</td>
              <td>{song.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <Link to="/playlists">Back to Playlists</Link>
    </div>
  );
};

export default PlaylistInfoPage; 