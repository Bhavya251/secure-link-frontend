// src/theme/theme.js
import { createTheme } from '@mui/material/styles';

const commonSettings = {
  typography: {
    fontFamily: 'ELIANTO, sans-serif',
  },
};

const lightTheme = createTheme({
  ...commonSettings,
  palette: {
    mode: 'light',
    background: {
      default: '#F9FAFC',
      paper: '#FFFFFF',
    },
    primary: {
      main: '#64748B',
    },
    secondary: {
      main: '#94A3B8',
    },
    text: {
      primary: '#0F172A',
      secondary: '#334155',
    },
    muted: {
      main: '#E2E8F0',
    },
  },
});

const darkTheme = createTheme({
  ...commonSettings,
  palette: {
    mode: 'dark',
    background: {
      default: '#0F172A',
      paper: '#1E293B',
    },
    primary: {
      main: '#94A3B8',
    },
    secondary: {
      main: '#CBD5E1',
    },
    text: {
      primary: '#F8FAFC',
      secondary: '#CBD5E1',
    },
    muted: {
      main: '#334155',
    },
  },
});

export { lightTheme, darkTheme };
