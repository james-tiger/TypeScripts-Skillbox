import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getPlaylistById } from '../api/api';
import { Playlist as PlaylistType } from '../types';
import '../styles/Playlist.css';

const Playlist: React.FC = () => {
  const { playlistId } = useParams<{ playlistId: string }>();
  const [playlist, setPlaylist] = useState<PlaylistType | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPlaylist = async () => {
      try {
        if (playlistId) {
          const playlistData = await getPlaylistById(playlistId);
          setPlaylist(playlistData);
        }
      } catch (error) {
        console.error('Error fetching playlist:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlaylist();
  }, [playlistId]);

  const handleGenreClick = () => {
    if (playlist) {
      navigate(`/playlists?genre=${playlist.genre}`);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!playlist) {
    return <div className="playlist-not-found">Playlist not found</div>;
  }

  return (
    <div className="playlist-container">
      <h1>PlaylistInfoPage</h1>
      <div className="playlist-genre">
        <span className="genre-link" onClick={handleGenreClick}>{playlist.genre}</span>
      </div>
      <div className="playlist-name">
        {playlist.name}
      </div>

      <div className="tracks-container">
        <h2>Tracks</h2>
        {playlist.tracks && playlist.tracks.length > 0 ? (
          <ul className="tracks-list">
            {playlist.tracks.map((track, index) => (
              <li key={index} className="track-item">
                <div className="track-info">
                  <h3>{track.title}</h3>
                  <p>Artist: {track.artist}</p>
                  <p>Duration: {track.duration}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No tracks in this playlist</p>
        )}
      </div>
    </div>
  );
};

export default Playlist; 