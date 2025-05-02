import React from 'react';
import { useMemo, useState } from 'react';
import './App.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Typography, Container } from '@mui/material';
import { Button, Box } from '@mui/material';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Chat from './pages/Chat';
import ForgotPassword from './pages/ForgotPassword';

function App() {
  return (
    <Container>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
