import React from 'react';
import {BottomNavigation, BottomNavigationAction, Stack} from '@mui/material'

const GenericFooter = () => {
    return(

        <BottomNavigation sx={{widthi: '100%', position: 'absolute', bottom:0}}>
            <Stack direction ='column'>
            <text> Contact @ksu.edu for help or inquiries</text>
            <Stack direction ='row' spacing={10} sx={{ flexGrow: 1}}>
                <text>The Bird</text>
                <text>The Chat</text>
                <text>The Gram</text>
                <text>The Book</text>
                </Stack>
            </Stack>
        </BottomNavigation>
    )
}

export default GenericFooter;