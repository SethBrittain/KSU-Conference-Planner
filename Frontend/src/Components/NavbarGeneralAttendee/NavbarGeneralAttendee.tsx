import React from "react";
import { AppBar, IconButton, Toolbar, Typography, Stack, Button, Box} from "@mui/material";

const NavbarGeneralAttendee = () =>
{
    return(
        <Box display="flex" flexDirection="row">
        <AppBar position='static'style={{ background: '#FFFFFF'}}>
            <Toolbar >
                <Typography variant='h5' component='div' style={{ color: '#000000'}} sx={{ flexGrow: 0, m: 2}}>
                KSU Conference Planner
                </Typography>
                <Stack direction ='row' spacing = {2} sx={{ flexGrow: 1  }}>
                    <Button style={{ color: '#000000'}} >Home</Button>
                    <Button style={{ color: '#000000'}}>Sessions</Button>
                    <Button style={{ color: '#000000'}}>About</Button>
                    <Button style={{ color: '#000000'}}>FAQ</Button>
                    <Button style={{ color: '#000000'}}>Your Schedule</Button>
                </Stack>
                <Stack direction ='row' spacing = {2} sx={{ flexGrow: 0  }}>
                    <Button style={{ color: '#000000'}} >Sign In</Button>
                    <Button style={{ color: '#000000', backgroundColor: '#512888'}}>Sign Up</Button>
                </Stack>
            </Toolbar>
        </AppBar>
        </Box>
        
    )
}

export default NavbarGeneralAttendee;