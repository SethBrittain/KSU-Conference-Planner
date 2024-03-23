import Navbar from '../../Navbars/Navbar';
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

	const oldVersion : React.JSX.Element = 
		<form className="w-full max-w-sm">
			<div className="md:flex md:items-center mb-6">
				<div className="md:w-1/3">
					<label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" form="inline-full-name">
						First Name
					</label>
				</div>
				<div className="md:w-2/3">
					<input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" placeholder="Jane"/>
				</div>
			</div>

			<div className="md:flex md:items-center mb-6">
				<div className="md:w-1/3">
					<label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" form="inline-full-name">
						Last Name
					</label>
				</div>
				<div className="md:w-2/3">
					<input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" placeholder="Doe"/>
				</div>
			</div>

			<div className="block md:flex md:items-center mb-6">
				<div className="md:w-1/3">
					<label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" form="inline-full-name">
					Attendee Type
					</label>
				</div>
				<ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
					<li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
						<div className="flex items-center ps-3">
							<input id="list-radio-license" type="radio" value="" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
							<label htmlFor="list-radio-license" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">K-State Undergrad Student</label>
						</div>
					</li>
					<li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
						<div className="flex items-center ps-3">
							<input id="list-radio-id" type="radio" value="" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
							<label htmlFor="list-radio-id" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">K-State Grad Student</label>
						</div>
					</li>
					<li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
						<div className="flex items-center ps-3">
							<input id="list-radio-military" type="radio" value="" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
							<label htmlFor="list-radio-military" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">K-State Alumni</label>
						</div>
					</li>
					<li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
						<div className="flex items-center ps-3">
							<input id="list-radio-passport" type="radio" value="" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
							<label htmlFor="list-radio-passport" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">K-State Faculty</label>
						</div>
					</li>
					<li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
						<div className="flex items-center ps-3">
							<input id="list-radio-passport" type="radio" value="" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
							<label htmlFor="list-radio-passport" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">High School Teacher</label>
						</div>
					</li>
				</ul>
			</div>

			<div className="block md:flex md:items-center mb-6">
				<div className="md:w-1/3">
					<label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" form="inline-full-name">
					Request Status
					</label>
				</div>
				<div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
					<input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
					<label htmlFor="bordered-checkbox-1" className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Reviewer</label>
				</div>
				<div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
					<input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
					<label htmlFor="bordered-checkbox-1" className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Scheduler</label>
				</div>
			</div>

			<div className="block md:flex md:items-center mb-6">
				<div className="md:w-1/2">
					<label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" form="inline-full-name">
					Interest In Presenting
					</label>
				</div>
				<ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
					<li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
						<div className="flex items-center ps-3">
							<input id="horizontal-list-radio-license" type="radio" value="" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
							<label htmlFor="horizontal-list-radio-license" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Interested</label>
						</div>
					</li>
					<li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
						<div className="flex items-center ps-3">
							<input id="horizontal-list-radio-id" type="radio" value="" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
							<label htmlFor="horizontal-list-radio-id" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Not Interested</label>
						</div>
					</li>
				</ul>
			</div>
			<div className="block md:flex md:items-center mb-6 md:w-1/2">
				<Button variant="contained" color="primary" fullWidth>Next</Button>
			</div>
		</form>;

	const newVersion : React.JSX.Element = 
		<form className="w-full">
			<TextInput label='First Name' formValue='firstName' labelPosition="top" placeholder='Jane'/>
			<TextInput label='Last Name' formValue='lastName' labelPosition="top" placeholder='Doe'/>
			<RadioButtonGroup label="Attendee Type" formValue='attendeeType' labelPosition='top' columns={2} values={[
				"K-State Undergrad Student",
				"K-State Grad Student",
				"K-State Alumni",
				"K-State Faculty",
				"High School Teacher"
			]}/>
			<CheckBoxGroup mainLabel='Request Status' columns={2} formValues={{"isReviewer":"Reviewer","isScheduler":"Scheduler"}}/>
			<RadioButtonGroup label='Interest In Presenting' formValue='isPresenting' labelPosition='top' columns={2} values={[
				"Interested",
				"Not Interested"
			]}/>
			<div className="block md:flex md:items-center mb-6 md:w-1/2 py-3">
				<button className='bg-purple-700 text-white p-2 px-4 text-xl flex align-middle font-medium rounded'>
					<span className='mr-2'>Next</span>
					<ArrowForwardIcon />
				</button>
			</div>
		</form>;

    return ( 
        <ThemeProvider theme={theme}>
            <Navbar NavbarType='SignUp' CurrentPage='SignUp'></Navbar>
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

export default SignUpPage2;