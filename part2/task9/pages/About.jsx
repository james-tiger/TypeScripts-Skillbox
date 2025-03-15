import React from 'react';

const About = () => {
  // Simulate heavy content by creating a large array
  const heavyContent = Array(1000).fill('Content item ').map((item, index) => `${item} ${index}`);
  
  return (
    <div className="page about-page">
      <h1>About Us</h1>
      <p>Learn more about our company and what we do.</p>
      <div className="content-section">
        <h2>Our Story</h2>
        <p>This is the about page with some test content that is relatively heavy.</p>
        <p>This page is now being loaded as a separate chunk thanks to dynamic imports.</p>
        
        <h3>Team Members</h3>
        <div className="team-list">
          {/* Only showing a small portion of the heavy content */}
          <ul>
            {heavyContent.slice(0, 10).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About; 