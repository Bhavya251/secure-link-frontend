// src/theme/ThemeContext.jsx

import { createContext, useMemo, useState, useContext, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { lightTheme, darkTheme } from './theme';

const ThemeContext = createContext();

export const useThemeContext = () => useContext(ThemeContext);

export const CustomThemeProvider = ({ children }) => {
  // ✅ Get stored mode from localStorage on first render
  const storedMode = localStorage.getItem('themeMode');
  const [mode, setMode] = useState(storedMode || 'dark');

  const toggleTheme = () => {
    setMode((prevMode) => {
      const newMode = prevMode === 'dark' ? 'light' : 'dark';
      localStorage.setItem('themeMode', newMode); // ✅ Save to localStorage
      return newMode;
    });
  };

  // ✅ On first load, make sure mode is in localStorage
  useEffect(() => {
    if (!storedMode) {
      localStorage.setItem('themeMode', mode);
    }
  }, []);

  const theme = useMemo(() => {
    const currentTheme = mode === 'dark' ? darkTheme : lightTheme;
    return createTheme(currentTheme);
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
