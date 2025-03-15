import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Users from './pages/Users';
import User from './pages/User';
import Playlists from './pages/Playlists';
import Playlist from './pages/Playlist';
import NotFound from './pages/NotFound';
import './styles/App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="users" element={<Users />} />
          <Route path="users/:id" element={<User />} />
          <Route path="playlists" element={<Playlists />} />
          <Route path="playlists/:playlistId" element={<Playlist />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App; 