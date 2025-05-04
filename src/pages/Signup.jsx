import React, { useState } from 'react';
import {
  Container,
  Box,
  Avatar,
  Typography,
  TextField,
  Button,
  Grid,
  Link,
  useTheme,
  Alert
} from '@mui/material';
import PersonAddTwoToneIcon from '@mui/icons-material/PersonAddTwoTone';
import axios from '../api/axios';

export default function Signup() {
  const theme = useTheme();
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setSuccess('');

    const data = new FormData(event.currentTarget);
    const fullName = data.get('fullName');
    const email = data.get('email');
    const password = data.get('password');

    try {
      const response = await axios.post('/register/', {
        username: fullName,
        email: email,
        password: password
      });

      setSuccess(response.data.message);
      event.target.reset(); // clear the form
    } catch (err) {
      if (err.response?.data) {
        const firstError = Object.values(err.response.data)[0];
        setError(typeof firstError === 'string' ? firstError : firstError[0]);
      } else {
        setError('Signup failed. Please try again.');
      }
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          padding: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: theme.palette.background.paper,
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: theme.palette.secondary.main }}>
          <PersonAddTwoToneIcon />
        </Avatar>
        <Typography component="h1" variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
          Create Your Account
        </Typography>

        {error && <Alert severity="error" sx={{ width: '100%', mb: 2 }}>{error}</Alert>}
        {success && <Alert severity="success" sx={{ width: '100%', mb: 2 }}>{success}</Alert>}

        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="fullName"
            label="Full Name"
            name="fullName"
            autoComplete="name"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            type="email"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="new-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Login here
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
