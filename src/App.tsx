import React from 'react';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
// import Badge from './components/Badge/Badge';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const theme = createTheme();

// pages for this product
import Components from "./views/Components/Components";
import LandingPage from "./views/LandingPage/LandingPage";
import ProfilePage from "./views/ProfilePage/ProfilePage";
import LoginPage from "./views/LoginPage/LoginPage";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/landing-page" element={<LandingPage />} />
            <Route path="/profile-page" element={<ProfilePage />} />
            <Route path="/login-page" element={<LoginPage />} />
            <Route path="/" element={<Components />} />
          </Routes>
        </BrowserRouter>,
      </ThemeProvider>
    </MuiThemeProvider>
  );
}

export default App;
