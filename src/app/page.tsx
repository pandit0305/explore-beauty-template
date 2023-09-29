"use client"; // This is a client component
import React from "react";
import '@aws-amplify/ui-react/styles.css';
import Navbar from "./components/navbar/Navbar";
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import awsExports from '../aws-exports';
import Footer from "./components/footer/Footer";
import Router from "./router/Router";
import { Box } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
Amplify.configure(awsExports);
import ToggleColorMode from "./context/ColorContext";

const App = () => {
  return (
    <ToggleColorMode>
      <BrowserRouter>
        <Box sx={{ bgcolor: 'background.default' }}>
          <Navbar />
          <Router />
          <Footer />
        </Box>
      </BrowserRouter>
    </ToggleColorMode>
  )
}
export default  withAuthenticator(App)