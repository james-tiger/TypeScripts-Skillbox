import React from 'react';

const Home = () => {
  return (
    <div className="page home-page">
      <h1>Home Page</h1>
      <p>Welcome to our website! This is the home page with some test content.</p>
      <div className="content-section">
        <h2>Latest Updates</h2>
        <p>Here's some content that would normally be loaded on the home page.</p>
        <p>This page is now being loaded as a separate chunk thanks to dynamic imports.</p>
      </div>
    </div>
  );
};

export default Home; 