// Mock data for playlists
const playlists = [
  {
    id: '1',
    name: 'Rock Classics',
    genre: 'Rock',
    tracks: [
      { title: 'Bohemian Rhapsody', artist: 'Queen', duration: '5:55' },
      { title: 'Stairway to Heaven', artist: 'Led Zeppelin', duration: '8:02' },
      { title: 'Hotel California', artist: 'Eagles', duration: '6:30' }
    ]
  },
  {
    id: '2',
    name: 'Pop Hits',
    genre: 'Pop',
    tracks: [
      { title: 'Shape of You', artist: 'Ed Sheeran', duration: '3:53' },
      { title: 'Bad Guy', artist: 'Billie Eilish', duration: '3:14' },
      { title: 'Blinding Lights', artist: 'The Weeknd', duration: '3:20' }
    ]
  },
  {
    id: '3',
    name: 'Jazz Favorites',
    genre: 'Jazz',
    tracks: [
      { title: 'Take Five', artist: 'Dave Brubeck', duration: '5:24' },
      { title: 'So What', artist: 'Miles Davis', duration: '9:22' },
      { title: 'Autumn Leaves', artist: 'Cannonball Adderley', duration: '6:48' }
    ]
  },
  {
    id: '4',
    name: 'Classical Masterpieces',
    genre: 'Classical',
    tracks: [
      { title: 'Moonlight Sonata', artist: 'Ludwig van Beethoven', duration: '15:00' },
      { title: 'Four Seasons - Spring', artist: 'Antonio Vivaldi', duration: '10:31' },
      { title: 'Canon in D', artist: 'Johann Pachelbel', duration: '5:30' }
    ]
  },
  {
    id: '5',
    name: 'Ambient Noise',
    genre: 'Non Music',
    tracks: [
      { title: 'White Noise', artist: 'Nature Sounds', duration: '60:00' },
      { title: 'Rain Sounds', artist: 'Nature Sounds', duration: '45:00' }
    ]
  }
];

// Modify users to include playlists
const updatedUsers = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    location: 'New York, USA',
    joined: '2020-01-15T10:30:00',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    playlist: playlists[0]
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    location: 'London, UK',
    joined: '2020-02-20T14:20:00',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    playlist: playlists[1]
  },
  {
    id: '3',
    name: 'Bob Johnson',
    email: 'bob@example.com',
    location: 'Sydney, Australia',
    joined: '2020-03-25T09:15:00',
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
    playlist: playlists[2]
  }
];

// Helper function to simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// API functions
export const getUsers = async () => {
  await delay(500);
  return [...updatedUsers];
};

export const getUserById = async (id: string) => {
  await delay(300);
  const user = updatedUsers.find(user => user.id === id);
  return user || null;
};

// Playlist API functions
export const getAllPlaylists = async () => {
  await delay(500);
  return [...playlists];
};

export const getPlaylistById = async (id: string) => {
  await delay(300);
  const playlist = playlists.find(playlist => playlist.id === id);
  return playlist || null;
}; 