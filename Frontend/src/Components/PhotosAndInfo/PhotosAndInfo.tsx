import React from "react";
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
}
const PhotosAndInfo = ({ image}: PhotosAndInfoProps) => {
    return(
        <Grid container direction ='column' style={{height: '10vh', width: '10vw'}}>
            <Grid container direction ='row' justifyContent={"space-evenly"}>
                <Grid item>
                    <text>
                        Sample Text Sample TextSample TextSample TextSample
                        TextSample TextSample TextSample TextSample TextvSample
                    </text>
                    
                </Grid>
                <Grid item>
                    
                        <img
                        src='https://source.unsplash.com/random'
                        alt='test'
                        />
               
                </Grid>
                
            </Grid>
           
        </Grid>
    )
};

export default PhotosAndInfo;