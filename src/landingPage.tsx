import React from 'react'
import BannerCard from './Component/banner'
import Slider from './Component/slider'
import Box from '@mui/material/Box';
import Post from './Component/post'

function LandingPage() {
    return (
        <div>
            <BannerCard />
            <Box className="gradient flex flex-col items-center mb-10">
                <Slider />
                <Post />
            </Box>
        </div>
    )
}

export default LandingPage
