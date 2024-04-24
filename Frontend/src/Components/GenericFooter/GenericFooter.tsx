import React from 'react';
import {BottomNavigation, BottomNavigationAction, Stack} from '@mui/material'

const GenericFooter = () => {
    return(
		<div id="footer" style={{borderTop: "solid 1px #666666"}} className="flex flex-col p-4 text-white bg-[#512888]">
			<div className='flex flex-row justify-center'>
				<span>© 2024 KSU Conference Planner</span>
				<span className='mx-2'>|</span>
				<a href="mailto:someone@ksu.edu">someone@ksu.edu</a>
				<span className='mx-2'>|</span>
				<a href="tel:5555555555">(555) 555-5555</a>
			</div>
			<div className='flex flex-row justify-center'>
				<a href="#" className='underline text-white text-center px-4'>X</a>
				<span className='mx-2'>|</span>
				<a href="#" className='underline text-white text-center px-4'>Instagram</a>
				<span className='mx-2'>|</span>
				<a href="#" className='underline text-white text-center px-4'>Facebook</a>
			</div>
		</div>
    )
}

export default GenericFooter;