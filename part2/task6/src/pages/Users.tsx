import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getUsers } from '../api/api';
import { User } from '../types';
import '../styles/Users.css';

const Users: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const userData = await getUsers();
        setUsers(userData);
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="users-container">
      <h1>Users</h1>
      
      <div className="users-grid">
        {users.map(user => (
          <div key={user.id} className="user-card">
            <div className="user-avatar">
              <img src={user.avatar || '/default-avatar.png'} alt={user.name} />
            </div>
            <div className="user-info">
              <h2>{user.name}</h2>
              <p>{user.location}</p>
              <Link to={`/users/${user.id}`} className="view-profile">
                View Profile
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users; 