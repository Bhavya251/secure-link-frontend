// src/pages/Home.jsx
import React from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Stack,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useThemeContext } from '../theme/ThemeContext';
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import chatHeroLight from '../assets/images/hero_section_light.jpeg';
import chatHeroDark from '../assets/images/hero_section_dark.jpeg';


export default function Home() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const { mode } = useThemeContext();

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Stack
        direction={isSmallScreen ? "column" : "row"}
        spacing={6}
        alignItems="center"
        justifyContent="space-between"
      >
        {/* Left: Text content */}
        <Box sx={{ flex: 1 }}>
          <ChatBubbleOutlineIcon
            sx={{
              fontSize: 64,
              mb: 2,
              color: theme.palette.primary.main,
            }}
          />

          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Welcome to SecureLink
          </Typography>

          <Typography variant="h6" color="text.secondary" mb={4}>
            Private. Secure. Seamless. Your next conversation begins here.
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            justifyContent="center"
          >
            <Button
              variant="contained"
              component={RouterLink}
              to="/login"
              sx={{ px: 4, py: 1 }}
            >
              Login
            </Button>
            <Button
              variant="outlined"
              component={RouterLink}
              to="/signup"
              sx={{ px: 4, py: 1 }}
            >
              Sign Up
            </Button>
          </Stack>
        </Box>

        {/* Right: Illustration */}
        <Box
          component="img"
          src={mode === 'dark' ? chatHeroLight : chatHeroDark}
          alt="Chat Illustration"
          sx={{
            flex: 1,
            maxWidth: "100%",
            width: "100%",
            height: 'auto',
            borderRadius: 4,
            display: isSmallScreen ? "none" : "block",
            boxShadow: 3,
          }}
        />
      </Stack>
    </Container>
  );
}

