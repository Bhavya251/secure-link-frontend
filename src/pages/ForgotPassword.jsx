// src/pages/ForgotPassword.jsx
import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Alert,
} from '@mui/material';
import axios from 'axios';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null); // success | error
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/auth/forgot-password/', { email });
      setStatus('success');
      setMessage(res.data.message || 'Password reset link sent to your email.');
    } catch (error) {
      setStatus('error');
      setMessage(
        error.response?.data?.error || 'Something went wrong. Try again.'
      );
    }
  };

  return (
    <Container maxWidth="sm">
      <Box mt={5}>
        <Typography variant="h4" gutterBottom>
          Forgot Password
        </Typography>
        {status && <Alert severity={status}>{message}</Alert>}
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            margin="normal"
            label="Email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button fullWidth variant="contained" color="primary" type="submit">
            Send Reset Link
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default ForgotPassword;

