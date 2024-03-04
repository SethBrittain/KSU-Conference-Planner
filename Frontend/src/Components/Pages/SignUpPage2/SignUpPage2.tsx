import Navbar from '../../Navbars/Navbar';
import {Stack, TextField} from '@mui/material';
import React from 'react';
import Box from '@mui/material/Box';
import { FormControl, FormLabel, Radio, RadioGroup, FormControlLabel, Grid } from '@mui/material';

const SignUpPage2 = (): React.JSX.Element => {

    return ( 
        <Box 
        height={window.innerHeight}
        width={window.innerWidth}
        display="flex"
        alignItems="start"
        flexDirection="column"
        sx={{ bgcolor: '#FFFFFF' }}
        >
            <Navbar NavbarType='SignUp' CurrentPage='SignUp'/>
            <Stack direction = 'row' sx={{ flexGrow: 1}}>
                <Box 
                height = '100%'
                width={window.innerWidth/2}
                display="flex"
                alignItems="start"
                gap={2}
                p={8}
                flexDirection="column"
                sx={{ bgcolor: '#512888', justifyContent: 'center' }}
                >
                    <Box
                    color='#FFFFFF'
                    fontSize={40}
                    textAlign='center'
                    >
                    Welcome!
                    </Box>
                    <Box
                    color='#FFFFFF'
                    fontSize={28}
                    >
                    Create an account for the K-State Computer Science Conference
                    </Box>
                </Box>
                <Box 
                height = '100%'
                width={window.innerWidth/2}
                display="flex"
                alignItems="start"
                gap={2}
                p={8}
                flexDirection="column"
                sx={{ justifyContent: 'center', bgcolor: '#FFFFFF'}}
                >
                    <Box
                    color='#512888'
                    fontSize={40}
                    textAlign='center'
                    >
                    Sign Up
                    </Box>
                    <FormControl defaultValue="" required>
                        <FormLabel>First Name</FormLabel>
                        <TextField></TextField>
                        <FormLabel>Last Name</FormLabel>
                        <TextField></TextField>
                            
                        <FormLabel id="attendeeType">Attendee Type</FormLabel>
                        <RadioGroup
                            aria-labelledby="attendeeType"
                            defaultValue="undergrad"
                            name="attendeeTypeGroup"
                        >
                            <Grid container spacing={2} >
                            <FormControlLabel 
                            value="undergrad" 
                            control={<Radio name="ID"/>} 
                            label="K-State Undergrad Student" 
                            />
                            <FormControlLabel 
                            value="grad" 
                            control={<Radio name="ID" />} 
                            label="K-State Grad Student"
                             />
                            <FormControlLabel value="alumni" control={<Radio />} label="K-State Alumni" />
                            <FormControlLabel value="faculty" control={<Radio />} label="K-State Faculty" />
                            <FormControlLabel value="teacher" control={<Radio />} label="High School Teacher" />
                            </Grid>
                            
                        </RadioGroup>
                    </FormControl>
                </Box>
                
            </Stack>
        </Box>

    );
};

export default SignUpPage2;