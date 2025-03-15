export interface User {
  id: string;
  name: string;
  email: string;
  location: string;
  joined: string;
  avatar?: string;
  playlist?: Playlist;
}

export interface Track {
  title: string;
  artist: string;
  duration: string;
}

export interface Playlist {
  id: string;
  name: string;
  genre: string;
  tracks: Track[];
} 