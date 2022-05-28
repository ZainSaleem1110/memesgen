import React from 'react'
import Box from '@mui/material/Box';
import Pagination from './pagination'
import Typography from '@mui/material/Typography';
import PostingCard from './posting';

const tabs = ["#bffs", "#bffs", "#bffs", "#bffs", "#bffs", "#bffs", "#bffs", "#bffs", "More"]

function Latest() {
    return (
        <Box>
            <Box className="overflow-x-auto verticalScroll">
                <Box className="h-[48px] w-[1100px] flex justify-between">
                    {tabs && tabs.map((button, index) => {
                        return <button className="flex items-center cursor-pointer w-[110px] h-[48px] text-[#3720C7] flex justify-center items-center category" style={{ borderRadius: "10px" }}>
                            {button}
                        </button>
                    })}
                </Box>
            </Box>
            <Box className="flex items-center justify-end mt-3">
                <Typography variant="p" className="pr-7">1 - 12 of 456</Typography>
                <Pagination />
            </Box>
            <PostingCard/>
        </Box>
    )
}

export default Latest
