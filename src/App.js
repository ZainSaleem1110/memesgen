import React from 'react'
import BannerCard from './Component/banner'
import Navbar from './Component/navbar'
import Slider from './Component/slider'
import Box from '@mui/material/Box';
import Post from './Component/post'

function App() {
    return (
        <Box>
            <Navbar />
            <BannerCard />
            <Box className="gradient flex flex-col items-center mb-10">
                <Slider />
                <Post />
            </Box>
        </Box>
    )
}

export default App
