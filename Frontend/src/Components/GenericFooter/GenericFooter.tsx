import React from 'react';
import {BottomNavigation, BottomNavigationAction, Stack} from '@mui/material'

const GenericFooter = () => {
    return(
        <div style={{
            width: '100vw' 
          }}>
            <BottomNavigation sx={{widthi: '100%', flexGrow: 0 , flexWrap:'wrap', backgroundColor:'#512888' }}>
                <Stack direction ='column' alignItems={'center'}>
                <text style={{color: '#FFFFFF'}}>© KSU Conference Planner | Contact someone@ksu.edu for help or inquiries</text>
                <Stack direction ='row' spacing={10}>
                    <text style={{color: '#FFFFFF'}}>X</text>
                    <text style={{color: '#FFFFFF'}}>Instagram</text>
                    <text style={{color: '#FFFFFF'}}>Facebook</text>
                    </Stack>
                </Stack>
            </BottomNavigation>
        </div>
    )
}

export default GenericFooter;