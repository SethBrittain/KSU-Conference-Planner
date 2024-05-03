import {Stack, Grid, ThemeProvider, createTheme} from '@mui/material';
import Box from '@mui/material/Box';
import { Button } from 'react-native';
import { Link } from 'react-router-dom';

/**
 * The information needed to create the componenet
 */
type SessionSideBarProps = {
	SessionTitle: string;
	Description: string;
}

/**
 * The component meant to act as a side bar to the sessions page
 */
const SessionsSideBar = (props: SessionSideBarProps) : React.JSX.Element => {
	return (
		<div className='ml-2 bg-white-200 border-2 border-gray-200 rounded w-4/12 py-2 flex flex-col items-center px-4 text-gray-700'>
			<Stack>
			<label className="text-gray-500 text-center font-bold text-left py-2">
				{props.SessionTitle}
			</label>
			<text
				className="ml-2 bg-white-200 appearance-none py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
				type="text"
			>{props.Description}</text>
			<button className='bg-purple-700 text-white p-2 px-4 text-xl font-medium rounded'>
					<span className='mr-2'>Join Talk</span>
			</button>
			</Stack>
		</div>
	)
}
export default SessionsSideBar;