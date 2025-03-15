import { User, Playlist } from '../models/types';

export const users: User[] = [
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

export const playlists: Playlist[] = [
  {
    id: 1,
    name: 'Rock Classics',
    genre: 'Rock',
    songs: [
      { id: 1, title: 'Bohemian Rhapsody', artist: 'Queen', duration: '5:55' },
      { id: 2, title: 'Stairway to Heaven', artist: 'Led Zeppelin', duration: '8:02' },
      { id: 3, title: 'Sweet Child O\' Mine', artist: 'Guns N\' Roses', duration: '5:56' }
    ]
  },
  {
    id: 2,
    name: 'Pop Hits',
    genre: 'Pop',
    songs: [
      { id: 4, title: 'Shape of You', artist: 'Ed Sheeran', duration: '3:53' },
      { id: 5, title: 'Bad Guy', artist: 'Billie Eilish', duration: '3:14' },
      { id: 6, title: 'Uptown Funk', artist: 'Mark Ronson ft. Bruno Mars', duration: '4:30' }
    ]
  },
  {
    id: 3,
    name: 'Hip Hop Collection',
    genre: 'Hip Hop',
    songs: [
      { id: 7, title: 'Lose Yourself', artist: 'Eminem', duration: '5:26' },
      { id: 8, title: 'Sicko Mode', artist: 'Travis Scott', duration: '5:12' },
      { id: 9, title: 'God\'s Plan', artist: 'Drake', duration: '3:18' }
    ]
  }
];

export const getUser = (id: number): User | undefined => {
  return users.find(user => user.id === id);
};

export const getPlaylist = (id: number): Playlist | undefined => {
  return playlists.find(playlist => playlist.id === id);
};

export const filterUsers = (name?: string): User[] => {
  if (!name) return users;
  return users.filter(user => 
    user.name.toLowerCase().includes(name.toLowerCase())
  );
};

export const filterPlaylists = (name?: string, genre?: string): Playlist[] => {
  return playlists.filter(playlist => {
    const matchesName = !name || playlist.name.toLowerCase().includes(name.toLowerCase());
    const matchesGenre = !genre || playlist.genre.toLowerCase() === genre.toLowerCase();
    return matchesName && matchesGenre;
  });
}; 