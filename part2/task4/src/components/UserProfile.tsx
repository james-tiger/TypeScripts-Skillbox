import React from 'react';
import { useAuth } from '../hooks/useAuth';

const UserProfile: React.FC = () => {
  const { user, logout, logoutStatus } = useAuth();

  if (!user) {
    return null;
  }

  return (
    <div className="user-profile">
      <div className="user-info">
        <h3>{user.username}</h3>
        <p>{user.email}</p>
      </div>
      <button 
        onClick={() => logout()} 
        disabled={logoutStatus.isLoading}
        className="logout-button"
      >
        {logoutStatus.isLoading ? 'Logging out...' : 'Logout'}
      </button>
      
      {logoutStatus.isError && (
        <div className="error-message">
          {logoutStatus.error instanceof Error ? logoutStatus.error.message : 'Logout failed'}
        </div>
      )}
    </div>
  );
};

export default UserProfile; 