import React from 'react'
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Post01 from "../assest/post1.svg"
import Post02 from "../assest/post2.svg"
import Post03 from "../assest/post3.svg"
import Post04 from "../assest/post4.svg"
import Post05 from "../assest/post5.svg"
import Post06 from "../assest/post6.svg"
import Post07 from "../assest/post7.svg"
import Post08 from "../assest/post8.svg"
import Post09 from "../assest/post9.svg"
import Post10 from "../assest/post10.svg"
import Post11 from "../assest/post11.svg"
import Post12 from "../assest/post12.svg"
import LinkIcon from '@mui/icons-material/Link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

function Posting() {
    return (
        <Box className="flex flex-wrap mt-7 gap-6">
            <Card className="w-[360px] h-[528px]">
                <Box className="h-[72px] flex items-center justify-between px-4">
                    <Box className="flex items-center">
                        <Box className="w-[40px] h-[40px] rounded-full flex justify-center items-center text-white bg-[#6750A4]">A</Box>
                        <Typography variant="p" className="w-[70%] pl-3">Me in my profile pic vs. me in the zoom meeting</Typography>
                    </Box>
                    <LinkIcon />
                </Box>
                <img src={Post01} alt="" />
                <Box className="h-[72px] flex items-center justify-between px-4">
                    <Stack spacing={2} direction="row">
                        <Button variant="outlined" startIcon={<ThumbUpIcon/>}>1.5k</Button>
                        <Button startIcon={<VisibilityIcon/>}>
                            1.5k
                        </Button>
                    </Stack>
                    <Button variant="contained" className="btn">Remix</Button>
                </Box>
            </Card>
            <Card className="w-[360px] h-[639px]">
                <Box className="h-[72px] flex items-center justify-between px-4">
                    <Box className="flex items-center">
                        <Box className="w-[40px] h-[40px] rounded-full flex justify-center items-center text-white bg-[#6750A4]">A</Box>
                        <Typography variant="p" className="w-[70%] pl-3">Me in my profile pic vs. me in the zoom meeting</Typography>
                    </Box>
                    <LinkIcon />
                </Box>
                <img src={Post02} alt="" />
                <Box className="h-[72px] flex items-center justify-between px-4">
                    <Stack spacing={2} direction="row">
                        <Button variant="outlined" startIcon={<ThumbUpIcon/>}>1.5k</Button>
                        <Button startIcon={<VisibilityIcon/>}>
                            1.5k
                        </Button>
                    </Stack>
                    <Button variant="contained" className="btn">Remix</Button>
                </Box>
            </Card>
        </Box>
    )
}

export default Posting
