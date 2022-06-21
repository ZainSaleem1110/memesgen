import React from 'react'
import Navbar from './Component/navbar'
import Box from '@mui/material/Box';
import Footer from './Component/footer'
import LandingPage from './landingPage';
import { Route, Routes } from 'react-router-dom'
import RecentMems from './Component/recentMems';

function App() {
    return (
        <Box className="mb-10 w-[100%]">
            <Navbar />
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/recentMemes" element={<RecentMems />} />
            </Routes>

            <Footer />
        </Box>
    )
}

export default App
