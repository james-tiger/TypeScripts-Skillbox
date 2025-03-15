import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { User } from '../models/types';
import { getUser } from '../data/mockData';

const UserInfoPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<User | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const fetchedUser = getUser(parseInt(id));
      setUser(fetchedUser);
    }
    setLoading(false);
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return (
      <div data-testid="no-user-message">
        <h1>User Not Found</h1>
        <p>The user you are looking for does not exist.</p>
        <Link to="/users">Back to Users</Link>
      </div>
    );
  }

  return (
    <div data-testid="user-info">
      <h1>{user.name}</h1>
      <p data-testid="user-email">Email: {user.email}</p>
      
      {user.playlistId ? (
        <div>
          <p>Has a playlist</p>
          <Link to={`/playlists/${user.playlistId}`} data-testid="playlist-link">
            View Playlist
          </Link>
        </div>
      ) : (
        <p>No playlist available</p>
      )}
      
      <Link to="/users">Back to Users</Link>
    </div>
  );
};

export default UserInfoPage; 