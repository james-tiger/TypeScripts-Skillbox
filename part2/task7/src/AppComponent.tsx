import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import MainPage from './components/MainPage';
import UsersPage from './components/UsersPage';
import UserInfoPage from './components/UserInfoPage';
import PlaylistsPage from './components/PlaylistsPage';
import PlaylistInfoPage from './components/PlaylistInfoPage';

function AppComponent() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Main</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/playlists">Playlists</Link>
          </li>
        </ul>
      </nav>

      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/users/:id" element={<UserInfoPage />} />
          <Route path="/playlists" element={<PlaylistsPage />} />
          <Route path="/playlists/:id" element={<PlaylistInfoPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default AppComponent; 