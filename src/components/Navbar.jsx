// src/components/Navbar.jsx
import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
  useTheme,
  useMediaQuery,
  Avatar,
  Tooltip
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import ForumTwoToneIcon from '@mui/icons-material/ForumTwoTone';
import LoginTwoToneIcon from '@mui/icons-material/LoginTwoTone';
import HowToRegTwoToneIcon from '@mui/icons-material/HowToRegTwoTone';
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const menuItems = [
  { label: 'Home', path: '/', icon: <HomeTwoToneIcon /> },
  { label: 'Chat', path: '/chat', icon: <ForumTwoToneIcon /> },
  { label: 'Login', path: '/login', icon: <LoginTwoToneIcon /> },
  { label: 'Signup', path: '/signup', icon: <HowToRegTwoToneIcon /> },
];

export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();

  const [anchorEl, setAnchorEl] = useState(null);
  const handleMenuOpen = (e) => setAnchorEl(e.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const [userMenuAnchor, setUserMenuAnchor] = useState(null);
  const handleUserMenuOpen = (event) => setUserMenuAnchor(event.currentTarget);
  const handleUserMenuClose = () => setUserMenuAnchor(null);

  // Simulated logged-in state (replace with actual logic later)
  const isLoggedIn = false; // Change to `true` to show avatar menu

  return (
    <AppBar
      position="fixed"
      color="default"
      sx={{
        top: 0,
        left: 0,
        right: 0,
        zIndex: theme.zIndex.drawer + 1,
        backdropFilter: 'blur(8px)',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', px: 2 }}>
        <Typography
          variant="h5"
          component={Link}
          to="/"
          sx={{
            textDecoration: 'none',
            color: 'inherit',
            fontWeight: 'bold',
            fontFamily: 'anfrip',
          }}
        >
          SECURELINK
        </Typography>

        {!isMobile ? (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            {menuItems.map((item) => (
              <Button
                key={item.label}
                variant="outlined"
                color={location.pathname === item.path ? 'primary' : 'inherit'}
                startIcon={item.icon}
                component={Link}
                to={item.path}
              >
                {item.label}
              </Button>
            ))}
            <ThemeToggle />
            {isLoggedIn && (
              <Tooltip title="Account">
                <IconButton onClick={handleUserMenuOpen} color="inherit">
                  <Avatar sx={{ bgcolor: 'primary.main' }}>U</Avatar>
                </IconButton>
              </Tooltip>
            )}
            <Menu
              anchorEl={userMenuAnchor}
              open={Boolean(userMenuAnchor)}
              onClose={handleUserMenuClose}
            >
              <MenuItem onClick={handleUserMenuClose}>Profile</MenuItem>
              <MenuItem onClick={handleUserMenuClose}>Logout</MenuItem>
            </Menu>
          </Box>
        ) : (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <ThemeToggle />

            {isLoggedIn && (
              <Tooltip title="Account">
                <IconButton onClick={handleUserMenuOpen} color="inherit">
                  <Avatar sx={{ bgcolor: 'primary.main', mx: 1 }}>U</Avatar>
                </IconButton>
              </Tooltip>
            )}

            <IconButton
              color="inherit"
              edge="end"
              onClick={handleMenuOpen}
              aria-controls="menu-appbar"
              aria-haspopup="true"
              sx={{ ml: 1 }}
            >
              <MenuTwoToneIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
              {menuItems.map((item) => (
                <MenuItem
                  key={item.label}
                  component={Link}
                  to={item.path}
                  onClick={handleMenuClose}
                  selected={location.pathname === item.path}
                >
                  {item.icon}
                  <Typography sx={{ ml: 1 }}>{item.label}</Typography>
                </MenuItem>
              ))}
              {isLoggedIn && [
                <MenuItem key="profile" onClick={handleUserMenuClose}>Profile</MenuItem>,
                <MenuItem key="logout" onClick={handleUserMenuClose}>Logout</MenuItem>
              ]}
            </Menu>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}
