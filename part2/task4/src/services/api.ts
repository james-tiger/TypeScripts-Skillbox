import axios from 'axios';

const API_URL = 'http://localhost:3001';

// Types
export interface User {
  id: string;
  email: string;
  username: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  password: string;
  username: string;
}

export interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateNoteData {
  title: string;
  content: string;
}

// Create axios instance with credentials
const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

// Authentication services
export const login = async (data: LoginData): Promise<User> => {
  try {
    const response = await api.post('/login', data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || 'Failed to login');
    }
    throw error;
  }
};

export const register = async (data: RegisterData): Promise<User> => {
  try {
    const response = await api.post('/register', data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || 'Failed to register');
    }
    throw error;
  }
};

export const logout = async (): Promise<void> => {
  try {
    await api.post('/logout');
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || 'Failed to logout');
    }
    throw error;
  }
};

export const getCurrentUser = async (): Promise<User> => {
  try {
    const response = await api.get('/users/me');
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || 'Failed to get user data');
    }
    throw error;
  }
};

// Notes services
export const getNotes = async (): Promise<Note[]> => {
  try {
    const response = await api.get('/notes');
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || 'Failed to fetch notes');
    }
    throw error;
  }
};

export const createNote = async (data: CreateNoteData): Promise<Note> => {
  try {
    const response = await api.post('/notes', data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || 'Failed to create note');
    }
    throw error;
  }
};

export default api; 