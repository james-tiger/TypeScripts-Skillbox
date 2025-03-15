import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route, Link, useParams, useSearchParams } from 'react-router-dom';

// Types
interface User {
  id: number;
  name: string;
  email: string;
  playlistId?: number;
}

interface Song {
  id: number;
  title: string;
  artist: string;
  duration: string;
}

interface Playlist {
  id: number;
  name: string;
  genre: string;
  songs: Song[];
}

// Mock data
const users: User[] = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    playlistId: 1
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    playlistId: 2
  },
  {
    id: 3,
    name: 'Bob Johnson',
    email: 'bob@example.com'
  }
];

const playlists: Playlist[] = [
  {
    id: 1,
    name: 'Rock Classics',
    genre: 'Rock',
    songs: [
      { id: 1, title: 'Bohemian Rhapsody', artist: 'Queen', duration: '5:55' },
      { id: 2, title: 'Stairway to Heaven', artist: 'Led Zeppelin', duration: '8:02' }
    ]
  },
  {
    id: 2,
    name: 'Pop Hits',
    genre: 'Pop',
    songs: [
      { id: 3, title: 'Shape of You', artist: 'Ed Sheeran', duration: '3:53' },
      { id: 4, title: 'Bad Guy', artist: 'Billie Eilish', duration: '3:14' }
    ]
  }
];

// Helper functions
const getUser = (id: number): User | undefined => {
  return users.find(user => user.id === id);
};

const getPlaylist = (id: number): Playlist | undefined => {
  return playlists.find(playlist => playlist.id === id);
};

const filterUsers = (name?: string): User[] => {
  if (!name) return users;
  return users.filter(user => 
    user.name.toLowerCase().includes(name.toLowerCase())
  );
};

const filterPlaylists = (name?: string, genre?: string): Playlist[] => {
  return playlists.filter(playlist => {
    const matchesName = !name || playlist.name.toLowerCase().includes(name.toLowerCase());
    const matchesGenre = !genre || playlist.genre.toLowerCase() === genre.toLowerCase();
    return matchesName && matchesGenre;
  });
};

// Components
const MainPage: React.FC = () => {
  return (
    <div>
      <h1>Music App</h1>
      <p>Welcome to our music application! Here you can browse users and playlists.</p>
      <h2>Features:</h2>
      <ul>
        <li>Browse and search users</li>
        <li>View user profiles</li>
        <li>Browse and filter playlists by genre and name</li>
        <li>View playlist details including songs</li>
      </ul>
    </div>
  );
};

const UsersPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const nameParam = searchParams.get('name') || '';
  const [nameFilter, setNameFilter] = React.useState(nameParam);
  const [users, setUsers] = React.useState<User[]>([]);

  React.useEffect(() => {
    setUsers(filterUsers(nameParam));
  }, [nameParam]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchParams({ name: nameFilter });
  };

  return (
    <div>
      <h1>Users</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search by name"
          value={nameFilter}
          onChange={(e) => setNameFilter(e.target.value)}
          data-testid="name-filter"
        />
        <button type="submit">Search</button>
      </form>

      <div className="users-list">
        {users.length > 0 ? (
          users.map((user) => (
            <div key={user.id} className="card">
              <h3>{user.name}</h3>
              <p>{user.email}</p>
              <Link to={`/users/${user.id}`}>View Profile</Link>
            </div>
          ))
        ) : (
          <p>No users found with the specified filters.</p>
        )}
      </div>
    </div>
  );
};

const UserInfoPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = React.useState<User | undefined>(undefined);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    if (id) {
      const fetchedUser = getUser(parseInt(id));
      setUser(fetchedUser);
    }
    setLoading(false);
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return (
      <div data-testid="no-user-message">
        <h1>User Not Found</h1>
        <p>The user you are looking for does not exist.</p>
        <Link to="/users">Back to Users</Link>
      </div>
    );
  }

  return (
    <div data-testid="user-info">
      <h1>{user.name}</h1>
      <p data-testid="user-email">Email: {user.email}</p>
      
      {user.playlistId ? (
        <div>
          <p>Has a playlist</p>
          <Link to={`/playlists/${user.playlistId}`} data-testid="playlist-link">
            View Playlist
          </Link>
        </div>
      ) : (
        <p>No playlist available</p>
      )}
      
      <Link to="/users">Back to Users</Link>
    </div>
  );
};

const PlaylistsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const nameParam = searchParams.get('name') || '';
  const genreParam = searchParams.get('genre') || '';
  
  const [nameFilter, setNameFilter] = React.useState(nameParam);
  const [genreFilter, setGenreFilter] = React.useState(genreParam);
  const [playlists, setPlaylists] = React.useState<Playlist[]>([]);

  React.useEffect(() => {
    setPlaylists(filterPlaylists(nameParam, genreParam));
  }, [nameParam, genreParam]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    const params: { name?: string; genre?: string } = {};
    if (nameFilter) params.name = nameFilter;
    if (genreFilter) params.genre = genreFilter;
    
    setSearchParams(params);
  };

  return (
    <div>
      <h1>Playlists</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search by name"
          value={nameFilter}
          onChange={(e) => setNameFilter(e.target.value)}
          data-testid="name-filter"
        />
        <select
          value={genreFilter}
          onChange={(e) => setGenreFilter(e.target.value)}
          data-testid="genre-filter"
        >
          <option value="">All Genres</option>
          <option value="Rock">Rock</option>
          <option value="Pop">Pop</option>
          <option value="Hip Hop">Hip Hop</option>
        </select>
        <button type="submit">Search</button>
      </form>

      <div className="playlists-list">
        {playlists.length > 0 ? (
          playlists.map((playlist) => (
            <div key={playlist.id} className="card">
              <h3>{playlist.name}</h3>
              <p>Genre: {playlist.genre}</p>
              <p>Songs: {playlist.songs.length}</p>
              <Link to={`/playlists/${playlist.id}`}>View Details</Link>
            </div>
          ))
        ) : (
          <p>No playlists found with the specified filters.</p>
        )}
      </div>
    </div>
  );
};

const PlaylistInfoPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [playlist, setPlaylist] = React.useState<Playlist | undefined>(undefined);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    if (id) {
      const fetchedPlaylist = getPlaylist(parseInt(id));
      setPlaylist(fetchedPlaylist);
    }
    setLoading(false);
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!playlist) {
    return (
      <div data-testid="no-playlist-message">
        <h1>Playlist Not Found</h1>
        <p>The playlist you are looking for does not exist.</p>
        <Link to="/playlists">Back to Playlists</Link>
      </div>
    );
  }

  return (
    <div data-testid="playlist-info">
      <h1 data-testid="playlist-name">{playlist.name}</h1>
      <p data-testid="playlist-genre">Genre: {playlist.genre}</p>
      <p data-testid="songs-count">Number of songs: {playlist.songs.length}</p>
      
      <h2>Songs</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Artist</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {playlist.songs.map((song) => (
            <tr key={song.id}>
              <td>{song.title}</td>
              <td>{song.artist}</td>
              <td>{song.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <Link to="/playlists">Back to Playlists</Link>
    </div>
  );
};

// Main App Component
const App: React.FC = () => {
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
};

// Add web vitals reporting
const reportWebVitals = () => {
  // Simplified version - would normally use the web-vitals library
  console.log('Web vitals reporting initialized');
};

// Render the app
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals(); 