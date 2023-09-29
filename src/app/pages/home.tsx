"use client"; // This is a client component
import React from "react";
import { Box } from "@mui/material";
import HomeSection from "../components/homeSection/HomeSection";
import MiddleSection from "../components/middleSection/MiddleSection";


export const Home = () => {
    return (
        <Box sx={{ paddingTop: '100px', width:'100%'}}>
            <HomeSection />
            <MiddleSection />
        </Box>
    )
}