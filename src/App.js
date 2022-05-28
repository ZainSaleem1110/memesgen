import React from 'react'
import BannerCard from './Component/banner'
import Navbar from './Component/navbar'
import Slider from './Component/slider'
import Box from '@mui/material/Box';

function App() {
    return (
        <Box>
            <Navbar />
            <BannerCard />
            <Box className="gradient">
                <Slider />
            </Box>
        </Box>
    )
}

export default App
