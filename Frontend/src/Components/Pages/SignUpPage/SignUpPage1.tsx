import {Stack, Grid, ThemeProvider, createTheme} from '@mui/material';
import Box from '@mui/material/Box';
import { MuiSignUpButton } from '../../Button/Button';
import { Link } from 'react-router-dom';

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

const SignUpPage1 = (): React.JSX.Element => {
    return(
    <ThemeProvider theme={theme}>
            {/* <Navbar NavbarType='SignUp' CurrentPage='SignUp'></Navbar> */}
            <div className="flex flex-col h-full">
                <div id="content" className='grow grid grid-cols-1 md:grid-cols-2'>
                    <div className="h-full flex flex-col justify-center items-center bg-[#512888] text-white">
                        <h1 className="text-5xl p-5">Welcome!</h1>
                        <p className="text-2xl w-6/12">Create an account for the K-State Computer Science</p>
                    </div>
                    <div className="h-full flex flex-col justify-center items-md-center bg-white text-black pr-12 pl-8">
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
                    </div>
                </div>
            </div>
        </ThemeProvider>
    );
};

export default SignUpPage1;