"use client"; // This is a client component
import React from "react";
import '@aws-amplify/ui-react/styles.css';
import { Amplify } from 'aws-amplify';
import { Box } from "@mui/material";
import awsExports from "@/aws-exports";
import HomeSection from "../components/homeSection/HomeSection";
import MiddleSection from "../components/middleSection/MiddleSection";
Amplify.configure(awsExports);

export const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

export const Home = () => {
    return (
        <Box sx={{ paddingTop: '100px' }}>
            <HomeSection />
            <MiddleSection />
        </Box>
    )
}