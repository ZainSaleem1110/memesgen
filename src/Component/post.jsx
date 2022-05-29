import React from 'react'
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import GiftBox from '../assest/giftbox.svg'
import Tabs from "./Tabs"

function Post() {
    return (
        <Box className="w-[80%] py-10 px-14 bg-white rounded-lg" style={{borderRadius:"20px !important"}}>
            <Box className="flex justify-between items-center">
                <Typography variant="h4" style={{fontWeight:"bold !important"}}>Recent & Notable</Typography>
                <Box className="w-[384px] bg-[#2066C7] rounded-xl flex items-center px-2 pr-5 py-3 text-white">
                    <img src={GiftBox} alt="" />
                    <Typography className="text-center ml-2">Find something you like? Use the base as a template to create your own meme!</Typography>
                </Box>
            </Box>
            <Tabs/>
        </Box>
    )
}

export default Post
