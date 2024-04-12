import Box from '@mui/material/Box';
import { MuiSignUpButton } from '../../Button/Button';
import { Link } from 'react-router-dom';
import TextInput from '../../InputComponents/TextInput';


const SignUpPage1 = (): React.JSX.Element => {
    return(
        <div className='h-full flex flex-col md:flex-row'>
            <div className="h-full w-full flex flex-col justify-center items-center bg-[#512888] text-white">
                <h1 className="text-5xl p-5">Welcome!</h1>
                <p className="text-2xl w-6/12">Create an account for the K-State Computer Science</p>
            </div>
            <div className='flex w-full items-center justify-center flex-col'>
                <TextInput label='Email' placeholder='example@ksu.edu' formValue='loginEmail' require={true} labelPosition='top' inputAlignment='center'></TextInput>
                <a href='signup'><MuiSignUpButton/></a>
                <div className='p-3'>
                    <i>Need Help&nbsp;</i><a className='underline' href="https://www.google.com">Contact Us!</a>
                </div>
            </div>
        </div> 
    );
};

export default SignUpPage1;