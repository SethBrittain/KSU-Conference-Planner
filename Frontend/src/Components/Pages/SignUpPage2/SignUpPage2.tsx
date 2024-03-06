import Navbar from '../../Navbars/Navbar';
import React from 'react';
import Box from '@mui/material/Box';
import { Stack, TextField, FormControl, FormLabel, Radio, RadioGroup, FormControlLabel, Grid, Checkbox, Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
    palette: {

        primary:{
            main : '#512888'
        },
        warning: {
          main : '#C62828'
        }
    } 
})

const SignUpPage2 = (): React.JSX.Element => {
    const ATTENDEETYPE = [
        { value: "undergrad", control: "ID", label:"K-State Undergrad Student"},
        { value: "grad", control: "ID", label:"K-State Grad Student"},
        { value: "alumni", control: "ID", label:"K-State Alumni"},
        { value: "faculty", control: "ID", label:"K-State Faculty"},
        { value: "teacher", control: "ID", label:"High School Teacher"}
      ];
    return ( 
        <ThemeProvider theme={theme}>
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
                    
                    <FormControl defaultValue="">
                        <FormLabel required>First Name</FormLabel>
                        <TextField></TextField>
                        <FormLabel required>Last Name</FormLabel>
                        <TextField></TextField>
                            
                        <FormLabel id="attendeeType" required >Attendee Type</FormLabel>
                        <RadioGroup
                            aria-labelledby="attendeeType"
                            defaultValue="undergrad"
                            name="attendeeTypeGroup"
                        >
                            <Grid container columns={16} alignItems="flex-start">
                            {ATTENDEETYPE.map((item) => (
                                    <Grid item xs={8} sm={8} style={{ paddingBottom: 12 }} alignContent="flex-start">
                                        <FormControlLabel value={item.value} control={<Radio name={item.control}/>} label={item.label}/>
                                    </Grid>
                                ))}
                            </Grid>                            
                        </RadioGroup>

                        <FormLabel id="interestType" required>Interest In Presenting</FormLabel>
                        <RadioGroup
                            aria-labelledby="interestType"
                            defaultValue="not"
                            name="interestGroup"
                        >
                            <Grid container columns={16} alignItems="flex-start">
                                <Grid item xs={8} sm={8} style={{ paddingBottom: 12 }} alignContent="flex-start">
                                    <FormControlLabel value="Interested" control={<Radio name="ID"/>} label="Interested"/>
                                </Grid>
                                <Grid item xs={8} sm={8} style={{ paddingBottom: 12 }} alignContent="flex-start">
                                    <FormControlLabel value="not" control={<Radio name="ID"/>} label="Not Interested"/>
                                </Grid>
                            </Grid>                            
                        </RadioGroup>
                        <FormLabel id="status">Request Status</FormLabel>
                        <Grid container columns={16} alignItems="flex-start">
                            <Grid item xs={8} sm={8} style={{ paddingBottom: 12 }} alignContent="flex-start">
                                <FormControlLabel control={<Checkbox />} label="Reviewer" />
                            </Grid>
                            <Grid item xs={8} sm={8} style={{ paddingBottom: 12 }} alignContent="flex-start">
                                <FormControlLabel control={<Checkbox />} label="Scheduler" />
                            </Grid>
                        </Grid> 
                    </FormControl>
                    <Button variant="contained" color="primary" fullWidth>Next</Button>
                </Box>
                
            </Stack>
        </Box>
        </ThemeProvider>
    );
};

export default SignUpPage2;