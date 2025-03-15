import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useAuth } from './hooks/useAuth';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import './styles/App.css';

// Create a query client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      retry: 1
    },
  },
});

// App container with QueryClientProvider
const AppContainer: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContent />
    </QueryClientProvider>
  );
};

// App content using auth hook
const AppContent: React.FC = () => {
  const { isAuthenticated, isLoadingUser } = useAuth();

  if (isLoadingUser) {
    return <div className="loading-container">Loading...</div>;
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Personal Notes</h1>
        {isAuthenticated && <UserProfile />}
      </header>

      <main className="app-content">
        {isAuthenticated ? (
          <div className="notes-dashboard">
            <NoteForm />
            <NoteList />
          </div>
        ) : (
          <Auth />
        )}
      </main>
    </div>
  );
};

export default AppContainer; 