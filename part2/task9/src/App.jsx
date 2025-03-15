import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Loading from './components/Loading';

// Dynamically import page components using React.lazy
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Services = React.lazy(() => import('./pages/Services'));

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App; 