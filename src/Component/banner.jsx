import * as React from 'react';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function BannerCard() {
    return (
        <Box className="w-[100%] h-[530px] mt-20 banner flex justify-center items-center">
            <Box className="w-[400px] mt-14 flex flex-col items-center">
                    <Typography variant="h3" className="text-center">
                        Make the next <span className="text-[#2066C7]">viral</span> meme.
                    </Typography>
                    <Typography variant="h6" sx={{mt:1}}>
                        one does simply make cool memes.
                    </Typography>
                <CardActions className="mt-4">
                    <Button variant="contained" className="btn">Start Making Memes</Button>
                </CardActions>
            </Box>
        </Box>
    );
}
