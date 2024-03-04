import NavbarSignUp from '../../NavbarSignUp/NavbarSignUp';
import {Stack, Grid} from '@mui/material';
import Box from '@mui/material/Box';
import { MuiSignUpButton } from '../../Button/Button';

const SignUpPage1 = (): React.JSX.Element => {

    return ( 
        <Box 
        height={window.innerHeight}
        width={window.innerWidth}
        display="flex"
        alignItems="start"
        flexDirection="column"
        sx={{ bgcolor: '#FFFFFF' }}
        >
            <NavbarSignUp/>
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
<Grid container spacing={2} alignItems="center" justifyContent="center">
                        <Grid item>
                            <MuiSignUpButton/>
                            <>Need Help? </>
                            {/* <Link to="https://www.google.com">Contact Us!</Link>*/}

                        </Grid>
                    </Grid>

                </Box>
                
            </Stack>
        </Box>

    );
};

export default SignUpPage1;