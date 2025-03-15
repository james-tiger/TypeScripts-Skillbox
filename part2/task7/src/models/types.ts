export interface User {
  id: number;
  name: string;
  email: string;
  playlistId?: number;
}

export interface Playlist {
  id: number;
  name: string;
  genre: string;
  songs: Song[];
}

export interface Song {
  id: number;
  title: string;
  artist: string;
  duration: string;
}

export interface SearchParams {
  name?: string;
  genre?: string;
} 