import Navigation from '@/components/Navigation';

export default function Home() {
  return (
    <div className="container">
      <Navigation />
      <div className="page home-page">
        <h1>Home Page</h1>
        <p>Welcome to our website! This is the home page with some test content.</p>
        <div className="content-section">
          <h2>Latest Updates</h2>
          <p>Here's some content that would normally be loaded on the home page.</p>
          <p>This page is now being rendered on the server with Next.js.</p>
        </div>
      </div>
    </div>
  );
} 