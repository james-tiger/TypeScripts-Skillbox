# Music App

A React application for browsing users, playlists, and tracks.

## Features

- Browse user profiles
- View all playlists
- Filter playlists by name and genre
- View detailed information about each playlist, including tracks
- Click on genres to find similar playlists

## Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

## Technologies Used

- React
- TypeScript
- React Router DOM
- CSS for styling

## Project Structure

- `/src/components` - Reusable UI components
- `/src/pages` - Page components for each route
- `/src/api` - API functions for data fetching
- `/src/styles` - CSS styles for components
- `/src/types` - TypeScript interfaces

## Routes

- `/` - Home page
- `/users` - List of users
- `/users/:id` - User details
- `/playlists` - List of playlists (with optional filtering)
- `/playlists/:playlistId` - Playlist details with tracks 