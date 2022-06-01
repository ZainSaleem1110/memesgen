import React from 'react'
import Box from '@mui/material/Box';
import Img1 from '../assest/slider (1).svg'
import Img2 from '../assest/slider (2).svg'
import Img3 from '../assest/slider (3).svg'
import Img4 from '../assest/slider (4).svg'
import Img5 from '../assest/post1.svg'
import Img6 from '../assest/post2.svg'
import Img7 from '../assest/post3.svg'
import Img8 from '../assest/post4.svg'
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
const LargestScreen = [
    { Img: Img1, name: "#freakingout" },
    { Img: Img2, name: "#freakingout" },
    { Img: Img3, name: "#freakingout" },
    { Img: Img4, name: "#freakingout" },
    { Img: Img5, name: "#freakingout" },
    { Img: Img6, name: "#freakingout" },
    { Img: Img7, name: "#freakingout" },
    { Img: Img8, name: "#freakingout" },
    { Img: Img1, name: "#freakingout" },
    { Img: Img2, name: "#freakingout" },
    { Img: Img3, name: "#freakingout" },
    { Img: Img4, name: "#freakingout" },
]

function Slider() {
    return (
        <Box className="flex lg:flex-row flex-col lg:items-start items-center md:my-10 my-5 w-[100%] overflow-x-hidden">
            <Box className="xl:w-[1000px] lg:w-[400px] h-[180px] flex justify-end">
                <Box className="lg:w-[75%] w-[100%] relative">
                    <img src={Trending} className="lg:h-[180px] xl:h-[250px]" alt="" />
                    <Box className="absolute lg:bottom-0 xl:bottom-[-30%] left-20">
                        <Typography>
                            <span className="font-bold xl:text-[32px] lg:text-[18px]">
                                Trending
                            </span>
                            <span className="text-[#2066C7] font-bold ml-1 xl:text-[32px] lg:text-[18px]">
                                Tags
                            </span>
                        </Typography>
                        <Typography sx={{ fontSize: 14, mt: 1 }}>
                            The most viewed, most loved.
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Box className="xl:w-[1000px] lg:w-[950px] w-[100%] overflow-hidden pt-16">
                <Box className="special-slider w-[100%] overflow-hidden relative h-[229px]">
                    <Box className="slids w-[2120px] flex gap-x-10 xl:hidden">
                        {sliderData && sliderData.map((list, index) => {
                            return <Box className="slid relative w-[265px] h-[200px]" key={index}>
                                <img src={list.Img} className="absolute top-0 left-0 z-30" alt="" />
                                <Box className="h-[40px] w-[100%] absolute bottom-0 left-0 text-white rounded-b-lg flex items-center pl-3 z-40" style={{ background: "rgba(0,0,0,.6)" }}>{list.name}</Box>
                            </Box>
                        })}
                    </Box>
                    <Box className="slidsLarge w-[3000px] hidden gap-x-10 xl:flex">
                        {LargestScreen && LargestScreen.map((list, index) => {
                            return <Box className="slid relative w-[265px] h-[200px]" key={index}>
                                <img src={list.Img} className="absolute h-[200px] w-[265px] top-0 left-0 z-30" alt="" />
                                <Box className="h-[40px] w-[100%] absolute bottom-0 left-0 text-white rounded-b-lg flex items-center pl-3 z-40" style={{ background: "rgba(0,0,0,.6)" }}>{list.name}</Box>
                            </Box>
                        })}
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Slider
