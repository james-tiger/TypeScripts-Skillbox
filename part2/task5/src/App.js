import React from 'react';
import MainPage from './pages/MainPage';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff4500',
    },
    secondary: {
      main: '#333333',
    },
    background: {
      default: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Segoe UI", "Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 600,
    },
  },
  components: {
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainPage />
    </ThemeProvider>
  );
}

export default App; 