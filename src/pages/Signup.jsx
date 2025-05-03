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
import PersonAddTwoToneIcon from '@mui/icons-material/PersonAddTwoTone';

export default function Signup() {
  const theme = useTheme();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      fullName: data.get('fullName'),
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
            <PersonAddTwoToneIcon />
          </Avatar>
        </Box>
        <Typography component="h1" variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
          Create Your Account
        </Typography>
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
