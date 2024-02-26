import NavbarGeneric from '../../NavbarGeneric/NavbarGeneric';
import {Stack, TextField} from '@mui/material';
import React, { useLayoutEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { FormControl, FormLabel } from '@mui/material';

type SignUpPage2Props = {
    text: string;
}

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
            <NavbarGeneric/>
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
                sx={{ justifyContent: 'center' }}
                >
                    <FormControl defaultValue="" required>
                        <div>
                            <FormLabel>Enter Stuff</FormLabel>
                            <TextField></TextField>
                        </div>
                        <div>
                            <FormLabel>Enter Stuff</FormLabel>
                            <TextField></TextField>
                        </div>
                    </FormControl>
                </Box>
                
            </Stack>
        </Box>

    );
};

export default SignUpPage2;