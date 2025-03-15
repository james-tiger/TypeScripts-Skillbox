import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Sidebar.css';

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <h2>Music App</h2>
      </div>
      <nav className="sidebar-menu">
        <ul>
          <li>
            <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/users" className={({ isActive }) => isActive ? 'active' : ''}>
              Users
            </NavLink>
          </li>
          <li>
            <NavLink to="/playlists" className={({ isActive }) => isActive ? 'active' : ''}>
              Playlists
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar; 