import { Grid, ThemeProvider, createTheme } from '@mui/material';
import { MuiSignInButton } from '../../Button/Button';
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

const SignInPage = (): React.JSX.Element => {
    return(
        <div className="flex flex-col h-full">
        <div id="content" className='grow grid grid-cols-1 md:grid-cols-2'>
            <div className="h-full flex flex-col justify-center items-md-center bg-white text-black">
                <div className="flex flex-row h-full">
                    <div id="content" className='grow grid grid-rows-1 md:grid-rows-2'>
                        <div className="h-full flex flex-row justify-center items-md-center bg-white text-black">
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
                            
                        </div>
                            <MuiSignInButton/>
                    </div>
                </div>
                <div className='p-3'>
                    <i>Need Help&nbsp;</i><a className='underline' href="https://www.google.com">Contact Us!</a>
                </div>
            </div>
            <div className="h-full flex flex-col justify-center items-center bg-[#512888] text-white">
                <h1 className="text-5xl p-5">Welcome Back!</h1>
            </div>
        </div>
    </div>
    );
};

export default SignInPage;