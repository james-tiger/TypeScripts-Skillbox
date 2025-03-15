import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// Wrap the App in React.StrictMode to help identify problems
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); 