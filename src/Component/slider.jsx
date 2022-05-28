import React from 'react'
import Box from '@mui/material/Box';
import Img1 from '../assest/slider (1).svg'
import Img2 from '../assest/slider (2).svg'
import Img3 from '../assest/slider (3).svg'
import Img4 from '../assest/slider (4).svg'
import Trending from '../assest/trending.svg'
import Typography from '@mui/material/Typography';

const sliderData = [
    { Img: Img1, name: "#freakingout" },
    { Img: Img2, name: "#freakingout" },
    { Img: Img3, name: "#freakingout" },
    { Img: Img4, name: "#freakingout" },
    { Img: Img1, name: "#freakingout" },
    { Img: Img2, name: "#freakingout" },
    { Img: Img3, name: "#freakingout" },
    { Img: Img4, name: "#freakingout" },
]

function Slider() {
    return (
        <Box className="flex my-10 pt-20">
            <Box className="w-[35%] h-[220px] flex justify-end">
                <Box className="w-[75%] relative">
                    <img src={Trending} className="h-[180px]" alt="" />
                    <Box className="absolute bottom-9 left-20">
                        <Typography variant="h5">
                            <span className="font-bold">
                                Trending
                            </span>
                            <span className="text-[#2066C7] font-bold ml-1">
                                Tags
                            </span>
                        </Typography>
                        <Typography variant="h6" sx={{ fontSize: 14,mt:1 }}>
                            The most viewed, most loved.
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Box className="w-[65%]">
                <Box className="special-slider w-[100%] overflow-hidden relative h-[229px]">
                    <Box className="slids w-[200%] flex gap-x-10">
                        {sliderData && sliderData.map((list, index) => {
                            return <Box className="slid">
                                <img src={list.Img} className="w-[265px] h-[229px]" alt="" />
                            </Box>
                        })}
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Slider
