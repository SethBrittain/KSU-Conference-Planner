import Navbar from '../../Navbars/Navbar';
import {Stack, Grid} from '@mui/material';
import Box from '@mui/material/Box';
import { MuiSignUpButton } from '../../Button/Button';
import React from 'react';

type SignUpPage1Props = {};

const old : React.JSX.Element = 
	<Box 
	height={window.innerHeight}
	width={window.innerWidth}
	display="flex"
	alignItems="start"
	flexDirection="column"
	sx={{ bgcolor: '#FFFFFF' }}
	>
		<Navbar NavbarType='SignUp' CurrentPage='SignUp'/>
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
						<MuiSignUpButton/>
						<>Need Help? </>
						{/* <Link to="https://www.google.com">Contact Us!</Link>*/}

					</Grid>
				</Grid>

			</Box>
			
		</Stack>
	</Box>;

const SignUpPage1 = (): React.JSX.Element => {
	// return old;
    return ( 
		<div className="flex flex-col h-full">
			{/* <Navbar NavbarType='SignUp' CurrentPage='SignUp'/> */}
			<div id="content" className='grow grid grid-cols-1 md:grid-cols-2'>
				<div className="h-full flex flex-col justify-center items-center bg-[#512888] text-white">
					<h1 className="text-5xl p-5">Welcome!</h1>
					<p className="text-2xl w-6/12">Create an account for the K-State Computer Science Conference</p>
				</div>
				<div className="h-full flex flex-col justify-center items-md-center bg-white text-black">
					<MuiSignUpButton/>
					<div className='p-3'>
						<i>Need Help&nbsp;</i><a className='underline' href="https://www.google.com">Contact Us!</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignUpPage1;