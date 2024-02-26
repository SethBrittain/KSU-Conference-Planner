import React from "react";
//import PhotosAndInfo.css from ./PhotosAndInfo.css;
import {Grid, 
    Stack, 
    Box,  
    Card,
    CardContent,
    Typography,
    CardActions,
    Button,
    CardMedia, Paper} from '@mui/material';
import { wrap } from "module";
type PhotosAndInfoProps = {
    image: string;
    text: string;
    spacing: number;
    size: number;
    side: boolean;
}
const css = `
            image-fit:cover;
        `


const PhotosAndInfo = ({ image, text, spacing, size, side }: PhotosAndInfoProps) => {
    
    if(side){
    return(
        <Stack direction='row' margin={1} spacing={spacing} sx={{ flexGrow: 1, flex:1}}>
            <Box>
                <style>{css}</style>
                <img
                width={100 * size}
                height={100 * size}
                src={image}
                alt='test'
                />
            </Box>
            <Box width={150 * size}>
                {text}
            </Box>
        </Stack>
    )
    }
    else{
        return(
        <Stack direction='row' margin={1} spacing={spacing} sx={{ flexGrow: 1, flex:1}}>
            <Box width={150 * size}>
                {text}
            </Box>
            <Box>
                <style>{css}</style>
                <img
                width={100 * size}
                height={100 * size}
                src= {image}
                alt='test'
                />
            </Box>
        </Stack>
    )
    }
};

export default PhotosAndInfo;