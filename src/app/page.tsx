"use client"; // This is a client component
import React from "react";
import '@aws-amplify/ui-react/styles.css';
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import awsExports from '../aws-exports';
import { Box } from "@mui/material";
Amplify.configure(awsExports);
import ToggleColorMode from "./context/ColorContext";
import { Home } from "./pages/home/home";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <ToggleColorMode>
      <Box sx={{ bgcolor: 'background.default' }}>
        <Navbar />
        <Home />
        <Footer />
      </Box>
    </ToggleColorMode>
  )
}
export default withAuthenticator(App)