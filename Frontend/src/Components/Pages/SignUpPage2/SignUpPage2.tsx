import React from 'react';
import RadioButtonGroup from '../../RadioButtonGroup/RadioButtonGroup';
import { Button, createTheme, ThemeProvider } from '@mui/material';
import TextInput from '../../InputComponents/TextInput';
import CheckBoxGroup from '../../InputComponents/CheckBoxGroup';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

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
	const SignUpQuestions : React.JSX.Element = 
		<form className="w-full">
			<TextInput label='First Name' formValue='firstName' labelPosition="top" placeholder='Jane' require = {true} labelid = 'required'/>
			<TextInput label='Last Name' formValue='lastName' labelPosition="top" placeholder='Doe' require ={true} labelid = 'required'/>
			<RadioButtonGroup label="Attendee Type" formValue='attendeeType' labelPosition='top' columns={2} values={[
				"K-State Undergrad Student",
				"K-State Grad Student",
				"K-State Alumni",
				"K-State Faculty",
				"High School Teacher"
			]} require = {true} labelid='required'/>
			<CheckBoxGroup mainLabel='Request Status' columns={2} formValues={{"isReviewer":"Reviewer","isScheduler":"Scheduler"}}/>
			<RadioButtonGroup label='Interest In Presenting' formValue='isPresenting' labelPosition='top' columns={2} values={[
				"Interested",
				"Not Interested"
			]} require = {false} labelid = 'required'/>
			<div className="block md:flex md:items-center mb-6 md:w-1/2 py-3">
				<button className='bg-purple-700 text-white p-2 px-4 text-xl flex align-middle font-medium rounded'>
					<span className='mr-2'>Next</span>
					<ArrowForwardIcon />
				</button>
			</div>
		</form>;

    return ( 
        <ThemeProvider theme={theme}>
            <div className="flex flex-col h-full">
                <div id="content" className='grow grid grid-cols-1 md:grid-cols-2'>
                    <div className="h-full flex flex-col justify-center items-center bg-[#512888] text-white">
                        <h1 className="text-5xl p-5">Welcome!</h1>
                        <p className="text-2xl w-6/12">Create an account for the K-State Computer Science</p>
                    </div>
                    <div className="h-full flex flex-col justify-center items-md-center bg-white text-black pr-12 pl-8">
                        {SignUpQuestions}
                    </div>
                </div>
            </div>
        </ThemeProvider>
    );
};

export default SignUpPage2;