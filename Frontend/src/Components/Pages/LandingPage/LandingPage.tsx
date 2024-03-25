import React from 'react';
import PhotosAndInfo from '../../PhotosAndInfo/PhotosAndInfo';

const LandingPage = (): React.JSX.Element => { 
	const content : React.JSX.Element = 
		<div className="grid grid-cols-1 gap-8 mx-4 md:grid-cols-3 p-4">
			<PhotosAndInfo text='This is a test description. I am not great at writing these. Hope this works' image = 'https://picsum.photos/900/300' spacing={1} size={2} side={true}/>
			<PhotosAndInfo text='This is a test description. I am not great at writing these. Hope this works' image = 'https://picsum.photos/1200/500' spacing={1} size={2} side={true}/>
			<PhotosAndInfo text='This is a test description. I am not great at writing these. Hope this works' image = 'https://picsum.photos/1000/650' spacing={1} size={2} side={true}/>
		</div>;

    return content;
};

export default LandingPage;