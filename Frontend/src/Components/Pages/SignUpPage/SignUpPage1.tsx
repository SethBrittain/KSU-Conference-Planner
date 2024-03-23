import Navbar from '../../Navbars/Navbar';
import {Stack, Grid} from '@mui/material';
import Box from '@mui/material/Box';
import { MuiSignUpButton } from '../../Button/Button';
import { Link } from 'react-router-dom';


const SignUpPage1 = (): React.JSX.Element => {

    return ( 
        <div       
        style={{
        width: '100vw',
        height: '100vh', 
        backgroundColor: 'white',
        overflowX: 'hidden', 
        }}>

<Navbar NavbarType='SignUp' CurrentPage='SignUp'/>
        <Box 
        height={window.innerHeight}
        width={window.innerWidth}
        display="flex"
        alignItems="start"
        flexDirection="column"
        sx={{ bgcolor: '#FFFFFF' }}
        >
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
                            <div className="md:flex md:items-center mb-6">
                                <div className="md:w-1/3">
                                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" form="inline-full-name">
                                        Email
                                    </label>
                                </div>
                                <div className="md:w-2/3">
                                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" placeholder="yourname@gmail.com"/>
                                </div>
                            </div>
                            <MuiSignUpButton/>
                            <>Need Help? </>
                            <Link to="https://example.com/" style={{ color: '#0070E0' }}>Contact Us!</Link>

                        </Grid>
                    </Grid>

                </Box>
                
            </Stack>
        </Box>
        </div>
        

    );
};

export default SignUpPage1;