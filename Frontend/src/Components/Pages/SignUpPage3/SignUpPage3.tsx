import React from 'react';
import RadioButtonGroup from '../../InputComponents/RadioButtonGroup/RadioButtonGroup';
import { Button, createTheme, ThemeProvider } from '@mui/material';
import TextInput from '../../InputComponents/TextInput';
import CheckBoxGroup from '../../InputComponents/CheckBoxGroup';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LargeTextInput from '../../InputComponents/LargeTextInput';
//The color palette of the page
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
/**
 * The third and final signup page of the signup process
 * @returns The third signup page
 */
const SignUpPage3 = (): React.JSX.Element => {
    /**
     * The component to be used to collect data on dietary restrictions and to request if any accomodations need to be made.
     */
	const newVersion : React.JSX.Element = 
		<form className="w-full">
			<LargeTextInput label='Do you have any dietary restrictions we need to know about?' formValue='diet' labelPosition="top" placeholder='Please list your dietary restrictions here' require = {false}/>
			<LargeTextInput label='Do you need any accomodations to attend the event?' formValue='accomodations' labelPosition="top" placeholder='Please list your accomodations here' require ={false}/>
			<div className="block md:flex md:items-center mb-6 md:w-1/2 space-x-4">
				<a href='signup' className='bg-purple-700 text-white p-2 px-4 text-xl flex align-middle font-medium rounded'>
					<ArrowBackIcon />
					<span className='mr-2'>Back</span>
				</a>
				<button className='bg-purple-700 text-white p-2 px-4 text-xl flex align-middle font-medium rounded'>
					<span className='mr-2'>Next</span>
					<ArrowForwardIcon />
				</button>
			</div>
		</form>;
    /**
     * The 3rd signup page
     */
    return ( 
        <ThemeProvider theme={theme}>
            {/* <Navbar NavbarType='SignUp' CurrentPage='SignUp'></Navbar> */}
            <div className="flex flex-col h-full">
                <div id="content" className='grow grid grid-cols-1 md:grid-cols-2'>
                    <div className="h-full flex flex-col justify-center items-center bg-[#512888] text-white">
                        <h1 className="text-5xl p-5">Welcome!</h1>
                        <p className="text-2xl w-6/12">Create an account for the K-State Computer Science</p>
                    </div>
                    <div className="h-full flex flex-col justify-center items-md-center bg-white text-black pr-12 pl-8">
                        {newVersion}
                    </div>
                </div>
            </div>
        </ThemeProvider>
    );
};

export default SignUpPage3;