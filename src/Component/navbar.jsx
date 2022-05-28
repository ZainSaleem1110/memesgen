import React from 'react'
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Logo from '../assest/logo.svg'
import SearchIcon from '@mui/icons-material/Search';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Navbar() {
    return (
        <Card className="w-[100%] py-4 fixed top-0 left-0 drop-shadow-lg flex justify-center items-center">
            <Box className="flex items-center w-[85%]">
                <img src={Logo} className="w-[190px]" alt="" />
                <Box className="flex items-center w-[400px] h-[44px] rounded-full bg-[#F1F1F1] text-[#AFAFAF] px-4 ml-[12%]">
                    <SearchIcon />
                    <input type="text" name="search" id="" className="bg-[transparent] focus:outline-none w-[80%] ml-3" placeholder="Search" />
                </Box>
                <Stack spacing={2} direction="row" className="ml-[10%]">
                    <Button variant="contained" className="btn">Create Meme</Button>
                    <Button variant="outlined" className="btn" startIcon={<AccountCircleIcon />}>
                        Log In
                    </Button>
                </Stack>
            </Box>
        </Card>
    )
}

export default Navbar
