import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../home/Home';
import Blog from '../pages/blog/Blog';

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="blog" element={<Blog />} />
        </Routes>
    )
}

export default Router
