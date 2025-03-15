import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getUserById } from '../api/api';
import { User as UserType } from '../types';
import '../styles/User.css';

const User: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<UserType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        if (id) {
          const userData = await getUserById(id);
          setUser(userData);
        }
      } catch (error) {
        console.error('Error fetching user:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>User not found.</div>;
  }

  return (
    <div className="user-container">
      <div className="user-card">
        <div className="user-avatar">
          <img src={user.avatar || '/default-avatar.png'} alt={user.name} />
        </div>
        <div className="user-info">
          <h1>{user.name}</h1>
          <p>Email: {user.email}</p>
          <p>Location: {user.location}</p>
          <p>Joined: {new Date(user.joined).toLocaleDateString()}</p>
          
          {user.playlist && (
            <div className="user-playlist">
              <h3>Favorite Playlist:</h3>
              <Link to={`/playlists/${user.playlist.id}`} className="playlist-link">
                {user.playlist.name}
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default User; 