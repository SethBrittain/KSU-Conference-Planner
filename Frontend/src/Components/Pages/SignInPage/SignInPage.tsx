import { MuiSignInButton } from '../../Button/Button';
import { Link } from 'react-router-dom';
import TextInput from '../../InputComponents/TextInput';

const SignInPage = (): React.JSX.Element => {
    return(
       <div className='h-full flex flex-col md:flex-row'>
            <div className='flex w-full items-center justify-center flex-col'>
                <TextInput label='Email' placeholder='example@ksu.edu' formValue='loginEmail' require={true} labelPosition='top' inputAlignment='center'></TextInput>
                <MuiSignInButton/>
                <div className='p-3'>
                    <i>Need Help&nbsp;</i><a className='underline' href="https://www.google.com">Contact Us!</a>
                </div>
            </div>
            <div className="h-full w-full flex flex-col justify-center items-center bg-[#512888] text-white">
                <h1 className="text-5xl p-5">Welcome Back!</h1>
            </div>
        </div>        
    );
};

export default SignInPage;