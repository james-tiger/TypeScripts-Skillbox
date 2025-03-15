import React from 'react';
import '../styles/Home.css';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Music App</h1>
      <p>Browse users and their favorite playlists</p>
      
      <div className="feature-grid">
        <div className="feature-card">
          <h2>Users</h2>
          <p>View all users and their profile information</p>
        </div>
        
        <div className="feature-card">
          <h2>Playlists</h2>
          <p>Browse playlists by genre and discover new music</p>
        </div>
      </div>
    </div>
  );
};

export default Home; 