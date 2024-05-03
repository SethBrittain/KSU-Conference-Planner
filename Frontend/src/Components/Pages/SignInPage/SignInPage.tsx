import { MuiSignInButton } from '../../Button/Button';
import { Link } from 'react-router-dom';
import TextInput from '../../InputComponents/TextInput';

const SignInPage = (): React.JSX.Element => {
    return(
        //Top-level container, keeps left and rights sides spaced and flexing
       <div className='h-full flex flex-col md:flex-row'>
            {
                //Left side, centers email submission title, text-input and help line
            }
            <div className='flex w-full items-center justify-center flex-col'>
                {
                    //Takes email input, neccessary for any login type
                }
                <TextInput label='Email' placeholder='example@ksu.edu' formValue='loginEmail' require={true} labelPosition='top' inputAlignment='center'></TextInput>
                {
                    //Submit email button (SIGN IN)
                }
                <MuiSignInButton/>
                {
                    //Link to help (when that gets put up)
                }
                <div className='p-3'>
                    <i>Need Help&nbsp;</i><a className='underline' href="https://www.google.com">Contact Us!</a>
                </div>
            </div>
            {
                //Right side, centers a greeting message
            }
            <div className="h-full w-full flex flex-col justify-center items-center bg-[#512888] text-white">
                <h1 className="text-5xl p-5">Welcome Back!</h1>
            </div>
        </div>        
    );
};

export default SignInPage;