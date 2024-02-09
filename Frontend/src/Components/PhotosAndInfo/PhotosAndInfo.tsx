import React from "react";
import {Grid, 
    Stack, 
    Box,  
    Card,
    CardContent,
    Typography,
    CardActions,
    Button,
    CardMedia} from '@mui/material'
type PhotosAndInfoProps = {
    image: string;
}
const PhotosAndInfo = ({ image}: PhotosAndInfoProps) => {
    return(
        <Grid>
            <Stack direction ='row'>
                <text>Text</text>
                
                
                
                <text>Photo</text>
            </Stack>
            <Stack direction ='row' width='300px'>
                <Card>
                    <CardMedia
                    component = 'img'
                    height = '140'
                    image={ image }
                    alt='unslashImage'
                    />
                </Card>
                
                <text>Sample Text Sample TextSample TextSample TextSample \n
                    TextSample TextSample TextSample TextSample TextvSample \n
                    TextvSample TextSample TextSample TextSample TextSample TextSample\n 
                    TextSample TextSample TextSample TextSample TextSample TextSample\nTextSample TextSample Text</text>
            </Stack>
        </Grid>
    )
};

export default PhotosAndInfo;