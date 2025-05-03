import React from 'react';
import {
  Container,
  Box,
  Avatar,
  Typography,
  TextField,
  Button,
  Grid,
  Link,
  useTheme
} from '@mui/material';
import LockTwoToneIcon from '@mui/icons-material/LockTwoTone';

export default function Login() {
  const theme = useTheme();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
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
        <Box display="flex" justifyContent="center">
          <Avatar sx={{ m: 1, bgcolor: theme.palette.secondary.main }}>
            <LockTwoToneIcon />
          </Avatar>
        </Box>
        <Typography component="h1" variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
          Welcome Back!
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={2}>
          Please log in to continue
        </Typography>

        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            type="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
          >
            Login
          </Button>

          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/forgotPassword" variant="body2">
                Forgot Password?
              </Link>
            </Grid>
          </Grid>

          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/signup" variant="body2">
                Don't have an account? Signup here
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
