// src/pages/Login.jsx
import React from 'react';
import {
  Container,
  Box,
  TextField,
  Typography,
  Button,
  Avatar,
  Paper,
  useTheme,
  useMediaQuery,
  Link as MuiLink,
  Grid
} from '@mui/material';
import LockTwoToneIcon from '@mui/icons-material/LockTwoTone';
import { Link } from 'react-router-dom';

export default function Login() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const email = data.get('email');
    const password = data.get('password');
    console.log('Login with:', { email, password });
    // TODO: Add backend API call here
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="90vh"
      sx={{
        px: isSmallScreen ? 2 : 10, // Responsive horizontal padding
      }}
    >
      <Paper
        elevation={6}
        sx={{
          p: 4,
          width: '100%',
          maxWidth: 400,
          borderRadius: 3,
        }}
      >
        <Box display="flex" justifyContent="center">
            <Avatar sx={{ m: 1, bgcolor: theme.palette.secondary.main }}>
                <LockTwoToneIcon />
            </Avatar>
        </Box>

        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Welcome Back!
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={3}>
          Please log in to continue
        </Typography>

        <form>
          <TextField
            fullWidth
            label="Email"
            type="email"
            margin="normal"
            variant="outlined"
            required
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            margin="normal"
            variant="outlined"
            required
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 2 }}
          >
            Login
          </Button>
        </form>
      </Paper>
    </Box>
  );
}
