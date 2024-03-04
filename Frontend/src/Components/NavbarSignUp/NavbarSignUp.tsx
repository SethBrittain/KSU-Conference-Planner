import React from "react";
import { AppBar, Toolbar, Typography, Stack, Button, Box} from "@mui/material";
import {ReactComponent as Icon} from '../Icon.svg';

const NavbarSignUp = () =>
{
    
    return(
        <Box display="flex" flexDirection="row" style={{width: '100vw'}}>
        <AppBar position='static'style={{ background: '#FFFFFF'}}>
            <Toolbar>
            <Icon/>
                <Typography variant='h5' component='div' style={{ color: '#000000', fontSize: '1.5rem'}} sx={{ flexGrow: 0, m: 2, flexWrap:'wrap'}}>
                KSU Conference Planner
                </Typography>
                <Stack direction ='row' spacing = {2} sx={{ flexGrow: 1, flexWrap:'wrap' }}>
                    <Button style={{ color: '#000000', fontSize: '.8rem'}}>Home</Button>
                    <Button style={{ color: '#000000', fontSize: '.8rem'}}>Sessions</Button>
                    <Button style={{ color: '#000000', fontSize: '.8rem'}}>About</Button>
                    <Button style={{ color: '#000000', fontSize: '.8rem'}}>FAQ</Button>
                </Stack>
                

                
                <Stack direction ='row' spacing = {2} sx={{ flexGrow: 0 , flexWrap:'wrap' }}>
                    <Button style={{ color: '#000000', fontSize: '.8rem'}} >Sign In</Button>
                </Stack>
            </Toolbar>
        </AppBar>
        </Box>
        
    )
}

export default NavbarSignUp;