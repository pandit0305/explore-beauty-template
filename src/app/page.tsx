"use client"; // This is a client component
import React from "react";
import '@aws-amplify/ui-react/styles.css';
import Navbar from "./components/navbar/Navbar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import awsExports from '../aws-exports';
import Footer from "./components/footer/Footer";
import Router from "./router/Router";
import { Box } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
Amplify.configure(awsExports);

export const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

export const App = () => {
  return (
    <Box sx={{ bgcolor: 'background.default' }}>
      <Navbar />
        <Router/>
       <Footer/>
    </Box>
  )
}

function ToggleColorMode() {
  const [mode, setMode] = React.useState<'light' | 'dark' | 'red'>('dark');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );
  return (
    <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
        </ThemeProvider>
      </ColorModeContext.Provider>
  );
}

export default withAuthenticator(ToggleColorMode);