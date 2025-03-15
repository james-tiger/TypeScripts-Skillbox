import React from 'react';

const MainPage: React.FC = () => {
  return (
    <div>
      <h1>Music App</h1>
      <p>Welcome to our music application! Here you can browse users and playlists.</p>
      <div>
        <h2>Features:</h2>
        <ul>
          <li>Browse and search users</li>
          <li>View user profiles</li>
          <li>Browse and filter playlists by genre and name</li>
          <li>View playlist details including songs</li>
        </ul>
      </div>
    </div>
  );
};

export default MainPage; 