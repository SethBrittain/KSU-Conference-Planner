//import React from 'react'
import TextInput from '../../InputComponents/TextInput';
import React from 'react';
import RadioButtonGroup from '../../InputComponents/RadioButtonGroup/RadioButtonGroup';
import CheckBoxGroup from '../../InputComponents/CheckBoxGroup';
import SessionsSideBar from '../../SessionsSideBar/SessionsSideBar';

const ComponentTest = (): React.JSX.Element => {
    return (
		<div>
			<RadioButtonGroup label="Attendee Type" formValue='attendeeType' labelPosition='top' columns={3} values={["Attendee", "Exhibitor", "Sponsor"]} require = {false}/>
			<RadioButtonGroup label="Attendee Type" formValue='attendeeType' labelPosition='top' columns={2} values={["Attendee", "Exhibitor", "Sponsor"]} require = {true} labelid = 'required'/>
			<RadioButtonGroup label="Attendee Type" formValue='attendeeType' columns={1} values={["Attendee", "Exhibitor", "Sponsor"]} require = {true} labelid='required'/>
			<TextInput label="First Name" formValue="firstName" placeholder="First Name" require = {false}/>
			<CheckBoxGroup mainLabel='Application Type' formValues={{"isReviewer":"Reviewer", "isScheduler":"Scheduler"}} columns={2}/>
			<SessionsSideBar SessionTitle='Talk Name' Description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
                anim id est laborum.'/>
		</div>
       //<LandingPage></LandingPage>
       //<SignUpPage2></SignUpPage2>
    //    <SignUpPage1/>
    ); 
};

export default ComponentTest;